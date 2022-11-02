# `@trkm/html-types-ts`

Typescript type and interface definitions for html elements used by different trkm libraries.

## Usage

### HtmlElementQuery

Query for a single `HTMLElement` using html tags, attribute names and attribute values.

Warning! Only one matching html element should be found. If more than one element is found, an error should be thrown.

* `tag` (optional): - When defined, search only within HTMLElements that match the tag. Example: 'input' would only search for input elements.

* `name` (optional): - The name of the attribute used when searching. Special names are:
  * `id`: uses document.getElementById (assured only one element returned if found)
  * `name`: uses document.getElementsByName
  * `class`: uses document.getElementsByClassName
  * `tag`: uses document.getElementsByTagName
  * `{custom}`: custom attribute names are supported

* `value` (optional): When provided, this value is matched to the value of the attribute `name`.

#### Examples

```typescript

// Match based on the form tag only using getElementsByTagName
// Matches <form></form>
const formTagOnly: HtmlElementQuery {
  tag: 'form'
};

// Matches based on id and value only.
// Matches <form id='form_rj_45'></form>
const idValueOnly: HtmlElementQuery {
  name: 'id',
  value: 'form_rj_45'
};

// Matches based on name and value only.
// Matches <input name='input_name_23'></input>
const nameValueOnly: HtmlElementQuery {
  name: 'name',
  value: 'input_name_23'
};

// Matches based on name and value only.
// Matches <input id='input_id_445'></input>
const nameValueOnly: HtmlElementQuery {
  tag: 'input',
  name: 'id',
  value: 'input_id_445'
};

// Matches using value only against `id` and then `name`
// Matches <input id='input_54'> and <input name='input_54'>
const valueOnly: HtmlElementQuery {
  value: 'input_54'
}

// Matches using value only against `id` and then `name`
// Matches <input name='input_57'>
const inputTagValueOnly: HtmlElementQuery {
  tag: 'input',
  value: 'input_57'
}
```
