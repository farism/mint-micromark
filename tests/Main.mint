suite "Micromark" {
  // this timeout is required in this first test to allow time for the modules to load
  test "it converts content to html" {
    <Micromark.Component content="# Hello world"/>
    |> Test.Html.start()
    |> Test.Context.timeout(1000)
    |> Test.Html.assertElementExists("h1")
  }

  test "it supports frontmatter" {
    <Micromark.Component
      content="~~GFM extension enabled~~"
      extensions={[Micromark.Extension::Gfm]}/>
    |> Test.Html.start()
    |> Test.Html.assertElementExists("del")
  }

  test "it supports GFM" {
    <Micromark.Component
      content="~~strikethrough~~"
      extensions={[Micromark.Extension::Gfm]}/>
    |> Test.Html.start()
    |> Test.Html.assertElementExists("del")
  }

  test "it supports MDX" {
    <Micromark.Component
      content="a <b /> c {1 + 1} d"
      extensions={[Micromark.Extension::Mdx]}/>
    |> Test.Html.start()
    |> Test.Html.assertTextOf("p", "a  c  d")
  }
}
