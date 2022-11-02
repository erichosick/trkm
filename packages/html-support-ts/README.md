# **@trkm/html-support-ts**

A very small typescript library used to find html elements on a webpage.

## Features

* Easily find a form on a page using `getForm`.
* Easily find an input element on a form using `getChildElement`.
* 100% typescript

## Usage

### `getForm`

Returns a form from the webpage using an HtmlElementQuery. An error is thrown if multiple form are found that match the HtmlElementQuery. If there is only one form on the page, calling getForm with no parameters will find the one form on the page.

* @param query (HtmlElementQuery): An optional HtmlElementQuery used to find the element. When not provided, assumes there is only one form on the page.
* @returns - An HTMLFormElement unless the form was not found. Throws an error if the form is not found.

```typescript
import { getForm } from '@trkm/html-support-ts';
import { HtmlElementQuery } from '@trkm/html-types-ts';

// Example HTML
// <form id='document'>
//   <input name='document_title' />
// </form>

// The query used to find the form. See @trkm/html-types-ts README.md for details.
const formQuery: HtmlElementQuery = {
  tag: 'form',
  name: 'id',
  value: 'document'
};

// returns the form using the query
const form = getForm(formQuery);

// returns the one form on the page. If there is more than one form found, an
// error is thrown.
const form2 = getForm();
```

### `getChildElement`

Finds a child element on a form using an HtmlElementQuery.

* @param form An html form element.
* @param query An HtmlElementQuery used to find the element.
* @returns The form element if found. Errors if no element is found.

```typescript
import { getForm, getChildElement } from '@trkm/html-support-ts';
import { HtmlElementQuery } from '@trkm/html-types-ts';

// Example HTML
// <form id='document'>
//   <input name='document_title' />
// </form>


const form = getForm();
const titleInputElement = getChildElement(form, {value='document_title'});

```

### `getElementFromQuery`

Queries for an element on a webpage.

* @param query An HtmlElementQuery used to find the element.
* @returns An HTMLElement if found. Throws an exception if no element was found.

```typescript
import { getElementFromQuery } from '@trkm/html-support-ts';

// Example HTML
// <form id='document'>
//   <input id='document_title' />
// </form>

const titleInputElement = getChildElement({
  tag='input',
  name='id',
  value='document_title'
});

```

## Intent

* No Emitted Javascript - The intent is to import this typescript library into a typescript project: compiling to Javascript occurring within the project.

## Development

See the [monorepo readme](https://www.github.com/erichosick/trkm).

## License

Licensed under [MIT](./LICENSE.md).
