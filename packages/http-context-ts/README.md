# **@trkm/http-context-ts**

Aggregates information about a current webpages's context, such as cookies and url parameters, into a single object for easy consumption.

## Features

* 100% typescript.

## Usage

### `wpContext`

Creates an easy to use javascript object containing information about a webpage such as cookies, url parameters, etc.

* @returns A context of a webpage.

```typescript
import { wpContext } from '@trkm/http-context-ts';
const context = wpContext();
console.log(context);
```

## Intent

* No Emitted Javascript - The intent is to import this typescript library into a typescript project: compiling to Javascript occurring within the project.

## Development

See the [monorepo readme](https://www.github.com/erichosick/trkm).

## License

Licensed under [MIT](./LICENSE.md).
