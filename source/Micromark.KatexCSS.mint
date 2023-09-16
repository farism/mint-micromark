global component Micromark.KatexCSS {
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
          href="#{@asset(../assets/katex.min.css)}"/>
      </Html.Portals.Head>
    } else {
      <></>
    }
  }
}
