# **@trkm/http-url-ts**

Support for converting information about an http url contained within the DOM windows and DOM documents, such as the url parameters, to javascript objects for easy consumption.

## Features

* 100% typescript.

## Usage

### `urlParamsToObj`

Converts a string of the format '?keyName01=keyValue01&keyName02=keyValue02` (the key/value pair format returned by window.location.search) to an object whose properties are the `keyName` and value is the `keyValue`. WARNING: Key names are case sensitive along with javascript object properties.

* @param keyValueString - A string containing zero or more key/value pairs of the format `?keyName01=keyValue01&`
* @param options:
  * mutateProperty - Lambda with a function signature of `(propertyName: string) => string;` used to convert the key name before using the key name as an object property.
* @returns - An object whose properties are the properties of all keys in the keyValueString and values are the value of the keyValueString.

```typescript
import { urlParamsToObj } from '@trkm/http-url-ts';

const urlParams = urlParamsToObj(window.location.search);

// convert url parameter name to lowercase

const toLowerCase = (input: string) => {
  return input.toLowerCase();
}

const urlParams2 = urlParamsToObj(
  '?ENABLED=true&updated=false',
  {
    mutateProperty: toLowerCase
  }
);

console.log(urlParams2);
// output
// {
//   enabled: true,
//   updated: false,
// }
```

## Intent

* No Emitted Javascript - The intent is to import this typescript library into a typescript project: compiling to Javascript occurring within the project.

## Development

See the [monorepo readme](https://www.github.com/erichosick/trkm).

## License

Licensed under [MIT](./LICENSE.md).
