# **@trkm/http-context**

Places the tracking magic library and interface into the globalThis.trkm root.

## Features

* 100% typescript

## Usage

In the following example, the context of the webpage is stored in a session (`trkm.session.merge(trkm.context())`).

```html
<head>
  <!-- We don't recommend using github as a CDN. This is just for the example code-->
  <script src="https://github.com/erichosick/trkm/blob/main/packages/http-context/dist/bundle.js"></script>
</head>

<body>
  <form>
    <input id="document_title"></input>
  </form>
  <script>
    // Persist the current page context into the session. This helps us capture
    // http parameters on a landing page which can be used later.
    trkm.session.merge(trkm.context());

    // setup a mapping between the page context and a form on the web page.
    const contextToFormMap = {
      formQuery: {
        tag: 'form',
        name: 'id',
        value: 'document'
      },
      destination: [
        {
          // pull a value from document.title
          pullFrom: {
            source: {
              type: 'context',
              jsonPath: 'document.title'
            }
          },
          // Find an input tag on the form using attribute name and the value
          destination: {
            tag: 'input',
            name: 'name',
            value: 'document_title'
          }
        }
      ]
    };

    // At anytime, we can apply the mapping. formApply will find the
    // HTMLFormElement on the page 
    trkm.formApply(contextToFormMap, trkm.session.get());

  </script>
  <h1>Checkout the console.</h1>
</body>
```

## Development

See the [monorepo readme](https://www.github.com/erichosick/trkm).

## License

Licensed under [MIT](./LICENSE.md).
