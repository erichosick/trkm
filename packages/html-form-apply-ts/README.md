# **@trkm/html-form-apply-ts**

Given an object, pulls values from the object (using getFromObject) and sets the value to a form field found via an HtmlElementQuery.

## Features

* 100% typescript.

## Usage

### `formApply`

After querying a form, pulls values from a context (using a JsonPath query) and sets the value of a form element (such as an input, select, textarea, etc.).

* @param formDestination (FormDestination): An interface which defines a query for forms and associated output destinations.
* @param context (object): An object that contains the information that will be set on the form.
* @returns - void

```typescript
import formApply from '@trkm/html-form-apply-ts';
import { FormDestination, HtmlElementQuery } from '@trkm/html-types-ts';
import { wpContext } from '@trkm/http-context-ts';

// Example HTML
// <form id='document'>
//   <input name='document_title' />
// </form>

// The query used to find the form. See @trkm/html-types-ts README.md for details
const formQuery: HtmlElementQuery = {
  tag: 'form',
  name: 'id',
  value: 'document'
};

// Map a given value in an object to a form field.
const formDestination: FormDestination = {
  formQuery,
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

// Get information about the current webpage.
const context = wpContext();

// Example context
// {
//   "document": {
//     "title": "Some title",
//   }
// }

// Finally, pull values from the context and apply them to the form.
formApply(formDestination, context);
```

## Intent

* No Emitted Javascript - The intent is to import this typescript library into a typescript project: compiling to Javascript occurring within the project.

## Development

See the [monorepo readme](https://www.github.com/erichosick/trkm).

## License

Licensed under [MIT](./LICENSE.md).
