global component Micromark.GithubCSS {
  state loaded : Bool = false

  fun load {
    if loaded {
      next { }
    } else {
      next { loaded: true }
    }
  }

  fun render : Html {
    if loaded {
      <Html.Portals.Head>
        <link
          rel="stylesheet"
          href="#{@asset(../assets/github-markdown.min.css)}"/>
      </Html.Portals.Head>
    } else {
      <></>
    }
  }
}

