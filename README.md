# Mint Micromark

[![CI](https://github.com/farism/mint-micromark/actions/workflows/ci.yml/badge.svg)](https://github.com/farism/mint-micromark/actions/workflows/ci.yml)

[Mint](https://mint-lang.com/) package for converting markdown to html. Uses [Micromark](https://github.com/micromark/micromark) under the hood.

# Basic usage

The easiest way to use Micromark is with `Micromark.Component`:

```mint
component Main {
  fun render {
    <Micromark.Component content="# Hello world"/>
  }
}
```

# Extensions

You can enable extensions to unlock additional functionality:

```mint
component Main {
  fun render {
    <Micromark.Component
      extensions=[Micromark.Extension::Gfm]
      content="~~strikethrough~~"/>
  }
}
```

# Advanced usage

If you want to directly access micromark, you can use the `Micromark.load` API

```mint
component Main {
  state micromark : Maybe(Function(String, String)) = (content: String) {content}

  fun componentDidMount {
    let micromark =
      await Micromark.load([Micromark.Extension::Gfm])

    next { micromark: Maybe::Just(micromark) }
  }

  fun render {
    case micromark {
      => <></>

      Maybe::Just(micromark) =>
        {
          let html =
            micromark(content)

          <div dangerouslySetInnerHTML={`{__html: #{html}}`}/>
        }
    }
  }
}

```

# Why this package?

Mint supports out of the box markdown rendering using a here doc:

```
<<#MARKDOWN
# Hello world!
MARKDOWN
```

This is an amazing feature and great for simple markdown.

However, the [Crystal shard](https://github.com/icyleaf/markd) used to enable this feature doesn't have support for some popular markdown extensions like GFM.

# Goals

- Be extremely easy to use
- On-demand loading - extensions and css are optional and loaded on demand

# Non-goals

- Be fully featured. This package intentionally uses Micromark as the underlying markdown engine because micromark about as minimal as it can get.

# Building docs

`mint build --skip-icons --skip-service-worker --relative && rm -rf docs/demo && mv dist docs/demo`
