module Micromark {
  const DIRECTIVE = @asset(../assets/micromark-extension-directive@3.0.0.js)
  const FRONTMATTER = @asset(../assets/micromark-extension-frontmatter@2.0.0.js)
  const GFM = @asset(../assets/micromark-extension-gfm@3.0.0.js)
  const MATH = @asset(../assets/micromark-extension-math@3.0.0.js)
  const MDX = @asset(../assets/micromark-extension-mdx@2.0.0.js)
  const MICROMARK = @asset(../assets/micromark@4.0.0.js)

  /* Maps extension names to their respective named exports for syntax and html */
  fun extensionImports (extension : Micromark.Extension) : Tuple(String, String) {
    case extension {
      Micromark.Extension::Directive => {"directive", "directiveHtml"}
      Micromark.Extension::Frontmatter => {"frontmatter", "frontmatterHtml"}
      Micromark.Extension::Gfm => {"gfm", "gfmHtml"}
      Micromark.Extension::Math => {"math", "mathHtml"}
      Micromark.Extension::Mdx => {"mdx", "mdxHtml"}
    }
  }

  /* Maps extension to their asset paths */
  fun extensionPath (extension : Micromark.Extension) : String {
    case extension {
      Micromark.Extension::Directive => DIRECTIVE
      Micromark.Extension::Frontmatter => FRONTMATTER
      Micromark.Extension::Gfm => GFM
      Micromark.Extension::Math => MATH
      Micromark.Extension::Mdx => MDX
    }
  }

  /* Loads Micromark with the specified extensions. */
  fun load (
    extensions : Array(Micromark.Extension) = [],
    allowDangerousHtml : Bool = false,
    allowDangerousProtocol : Bool = false,
    defaultLineEnding : String = ""
  ) : Promise(Function(String, String)) {
    let micromark =
      await `import(#{MICROMARK}).then(m => m.micromark)`

    let loaders =
      Array.map(extensions, loadExtension)

    let loaded =
      await `Promise.all(#{loaders})` as Array(Tuple(syntax, html))

    let syntax =
      Array.map(loaded, (i : Tuple(syntax, html)) { i[0] })

    let html =
      Array.map(loaded, (i : Tuple(syntax, html)) { i[1] })

    (markdown : String) : String {
      `
      (() => {
        try {
          const $md = #{micromark}(#{markdown}, {
            extensions: #{syntax},
            htmlExtensions: #{html},
            allowDangerousHtml: #{allowDangerousHtml},
            allowDangerousProtocol: #{allowDangerousProtocol},
            defaultLineEnding: #{defaultLineEnding}
          })

          return $md
        } catch($e) {
          return $e.message
        }
      })()
      `
    }
  }

  /* Load an individual extension */
  fun loadExtension (extension : Micromark.Extension) : Tuple(syntax, html) {
    let path =
      extensionPath(extension)

    let imports =
      extensionImports(extension)

    let syntax =
      imports[0]

    let html =
      imports[1]

    `
    import(#{path}).then(m => {
      const syntax = m[#{syntax}] ? m[#{syntax}]() : null
      const html = m[#{html}] ? m[#{html}]() : null

      return [syntax, html]
    })
    `
  }
}
