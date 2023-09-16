component Main {
  state count = 0
  state p = "This is *plain* markdown, **no extensions** enabled\n\n* list items"
  state h1 = "# This is an H1"
  state h2 = "## This is an H2"
  state h3 = "### This is an H3"
  state h4 = "#### This is an H4"
  state h5 = "##### This is an H5"
  state h6 = "###### This is an H6"
  state frontmatter = "---\na: b\n---\n# Using frontmatter doesn't matter"

  state gfm = "~~GFM extension enabled~~"
  state gfmtable = "|header|\n|-|\n|cell|"

  state math1 = "Lift($L$) can be determined by Lift Coefficient ($C_L$) like the following equation.\n$$\nL = \\frac{1}{2} \\rho v^2 S C_L\n$$"

  state mdx = "mdx extension
  
  a <b /> c {1 + 1} d
  "

  get examples {
    [
      {p, (e : Html.Event) { next { p: Dom.getValue(e.target) } }, []},
      {h1, (e : Html.Event) { next { h1: Dom.getValue(e.target) } }, []},
      {h2, (e : Html.Event) { next { h2: Dom.getValue(e.target) } }, []},
      {h3, (e : Html.Event) { next { h3: Dom.getValue(e.target) } }, []},
      {h4, (e : Html.Event) { next { h4: Dom.getValue(e.target) } }, []},
      {h5, (e : Html.Event) { next { h5: Dom.getValue(e.target) } }, []},
      {h6, (e : Html.Event) { next { h6: Dom.getValue(e.target) } }, []},
      {frontmatter, (e : Html.Event) { next { frontmatter: Dom.getValue(e.target) } }, [Micromark.Extension::Frontmatter]},
      {gfm, (e : Html.Event) { next { gfm: Dom.getValue(e.target) } }, [Micromark.Extension::Gfm]},
      {gfmtable, (e : Html.Event) { next { gfmtable: Dom.getValue(e.target) } }, [Micromark.Extension::Gfm]},
      {math1, (e : Html.Event) { next { math1: Dom.getValue(e.target) } }, [Micromark.Extension::Math]},
      {mdx, (e : Html.Event) { next { mdx: Dom.getValue(e.target) } }, [Micromark.Extension::Mdx]}
    ]
  }

  style list {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  style example {
    background: #eee;
    border-radius: 12px;
    margin: 12px 0;
    padding: 24px;
  }

  style content {
    border: 1px solid grey;
    padding: 8px;
    border-radius: 8px;
  }

  style input {
    width: 300px;
    height: 150px;
    margin-top: 10px;
    border: none;
    width: 100%;
    resize: none;
    border-radius: 8px;
    padding: 12px;
    box-sizing: border-box;
  }

  fun render {
    <div::list>
      for example of examples {
        <div::example>
          <div::content>
            <Micromark.Component
              content={example[0]}
              extensions={example[2]}/>
          </div>

          <textarea::input onChange={example[1]}>
            <{ example[0] }>
          </textarea>
        </div>
      }
    </div>
  }
}
