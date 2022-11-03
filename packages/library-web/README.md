# **@trkm/library-web**

Exposes the tracking magic library in the browser along with defaults.

## Features

## Usage

In the following example, the context of the webpage is stored in a session (`trkm.session.merge(trkm.context())`). The url parameter `userName`, if provided, is maintained between webpages.

```html
<head>
  <!-- We don't recommend using github as a CDN. This is just for the example code-->
  <script src="./dist/bundle.js"></script>
  <title>Example Tracking Page</title>
</head>

<body>
<head>
  <!-- We don't recommend using github as a CDN. This is just for the example code-->
  <script src="./dist/bundle.js"></script>
  <title>Example Tracking Page</title>
</head>

<body>
  <form id='example_form'>
    <input id="document_title" />
    <input id="user_name" />
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
        value: 'example_form'
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
            name: 'id',
            value: 'document_title'
          }
        },
        {
          pullFrom: {
            required: false,
            source: {
              type: 'context',
              jsonPath: 'document.url.urlParams.userName'
            }
          },
          destination: { value: 'user_name' }
        },
      ]
    };

    // At anytime, we can apply the mapping. formApply will find the
    // HTMLFormElement on the page 
    trkm.formApply(contextToFormMap, trkm.session.get());

  </script>
  <p>The form field should contain the title of the page.</p>
</body>
```

## Development

See the [monorepo readme](https://www.github.com/erichosick/trkm).

## License

Licensed under [MIT](./LICENSE.md).
