# **@trkm/types**

Defines types shared between @trkm organization packages.

## Features

* 100% typescript.

## Usage

### ObjectKeyStrValueStr

**ObjectKeyStrValueStr** defines an object interface with a string for keys and string values. Enables dynamically building an object instance: adding properties ad hoc. Intended to be used for key/value pairs where the key is a string and the value is a string.

```typescript
const dynamicObject: ObjectKeyStrValueStr = {};
dynamicObject['id'] = '3';
```

#### Explanation

In typescript, for cases where an object's shape is unknown, we must define the type of key supported by the object.

The following typescript:

```typescript
const dynamicObject = {};
dynamicObject['id'] = 3;
```

Returns the error:

> Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'. No index signature with a parameter of type 'string' was found on type '{}'.ts(7053)

Defining a key type on the object enables us to interface with the object's properties using a key of that type.

### DataToObjectSignature

**DataToObjectSignature** defines a function signature. The intent of the function is to take a string embedded with multiple key/value pairs of strings and convert it to an object. Examples would be url search parameters or web page document cookies.

## Intent

* No Emitted Javascript - The intent is to import this typescript library into a typescript project: compiling to Javascript occurring within the project.

## Development

See the [monorepo readme](https://www.github.com/erichosick/trkm).

## License

Licensed under [MIT](./LICENSE.md).
