component Micromark.Component {
  property content : String = ""

  property allowDangerousHtml : Bool = false

  property allowDangerousProtocol : Bool = false

  property defaultLineEnding : String = ""

  property extensions : Array(Micromark.Extension) = [Micromark.Extension::Gfm]

  property enableCss : Bool = true

  state micromark : Maybe(Function(String, String)) = Maybe::Nothing

  fun componentDidMount {
    if enableCss && Array.contains(extensions, Micromark.Extension::Gfm) {
      Micromark.GithubCSS.load()
    }

    if enableCss && Array.contains(extensions, Micromark.Extension::Math) {
      Micromark.KatexCSS.load()
    }

    let micromark =
      await Micromark.load(extensions, allowDangerousHtml, allowDangerousProtocol, defaultLineEnding)

    next { micromark: Maybe::Just(micromark) }
  }

  get markdownBodyClass {
    if enableCss {
      "markdown-body"
    } else {
      ""
    }
  }

  fun render {
    <>
      case micromark {
        => <></>

        Maybe::Just(micromark) =>
          {
            let html =
              micromark(content)

            <div
              class={markdownBodyClass}
              dangerouslySetInnerHTML={`{__html: #{html}}`}/>
          }
      }
    </>
  }
}
