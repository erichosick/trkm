# **@trkm/http-cookies-ts**

Converts the [Http cookie format](https://developer.mozilla.org/en-US/docs/web/api/document/cookie) (document.cookie) to a javascript object: the cookie name becomes the object property name.

## Features

* Leverages `decodeURIComponent` for both cookie name and cookie value.
* Alter the cookie name before using the name as an object property: lowerPascalCase, lowerCase, etc.

## Usage

### `cookiesToObj`

Converts a string of the format `keyName01=keyValue01;keyName02=keyValue02` (the key/value pair format returned by document.cookie) into an object whose properties are the `keyName` and value is the `keyValue`. WARNING: Key names are case sensitive along with javascript object properties. See [Http Cookies](https://developer.mozilla.org/en-US/docs/web/api/document/cookie) for details.

* @param keyValueString - A string containing zero or more key/value pairs of the format `keyName01=keyValue01;`.
* @param options:
  * mutateProperty - Lambda with a function signature of `(propertyName: string) => string;` used to convert the key name before using the key name as an object property.
* @returns - An object whose properties are the properties of all keys in the keyValueString and values are the value of the keyValueString.

```typescript
import { cookiesToObj } from '@trkm/http-cookies-ts';

const cookies = cookiesToObj(document.cookie);

// convert cookie name to lowercase
const toLowerCase = (input: string):string => {
  return input.toLowerCase();
}

const cookies2 = cookiesToObj(
  'ENABLED=true;updated=false;',
  {
    mutateProperty: toLowerCase,
  }
);

console.log(cookies2);
// output
// {
//   enabled: true,
//   updated: false,
// }
```

Note: Ignores invalid cookie definitions: cookieName=cookieValue

## Intent

* No Emitted Javascript - The intent is to import this typescript library into a typescript project: compiling to Javascript occurring within the project.

## Development

See the [monorepo readme](https://www.github.com/erichosick/trkm).

## License

Licensed under [MIT](./LICENSE.md).
