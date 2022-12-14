# **@trkm/http-uuid-generate-v4-ts**

Generates a Version 4 uuid within a webpage by pulling the uuid generated by createObjectURL out of the url.

## Features

* 100% typescript.

## Usage

### uuidGenerateV4

**uuidGenerateV4** generates a Version 4 uuid within a webpage by pulling the uuid generated by createObjectURL out of the url.

```typescript
import uuidGenerateV4 from '@trkm/http-uuid-generate-v4-ts';
const uuidV4 = uuidGenerateV4();
```

## Intent

* No Emitted Javascript - The intent is to import this typescript library into a typescript project: compiling to Javascript occurring within the project.

## Development

See the [monorepo readme](https://www.github.com/erichosick/trkm).

## License

Licensed under [MIT](./LICENSE.md).
