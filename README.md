# trkm

A [Lerna](https://lerna.js.org/) mono repo which contains:

* [object-json-path-ts](./packages/object-json-path-ts/README.md) - Using a small subset of [JSONpath](https://jsontostring.com/jsonpath/) features, object-json-path-ts gets or sets a value on a javascript object.
* [http-cookies-ts](./packages/http-cookies-ts/README.md) - Converts the [Http cookie format](https://developer.mozilla.org/en-US/docs/web/api/document/cookie) (document.cookie) to a javascript object: the cookie name becomes the object property name.

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## Development

Development requirements:

* Node + Yarn

```bash

# init all the projects
yarn

# continuously run tests
yarn test:unit:watch

# run unit tests
yarn test:unit

# build javascript library from typescript library
yarn build

# continuously build javascript library from typescript library
yarn build:watch

# publish all packages that have changed to npmjs.com
yarn publish:all
```

### Pushing Changes

```bash
# verify test run
yarn test:integration

# verify build works
yarn build

# make sure everything is commented, checked in and pushed into git
# TODO: Document code review process

# publish all packages that have changed
# you will need to have setup the account with npmjs.com
yarn publish:all

# enter the one-time password generated using 
# select correct version bump
```

### Adding a New Project

```bash
# Add a new project
yarn lerna:create {@name/new-package-name}  # Example yarn lerna:create @trkm/http-context

# Link it to other projects
yarn add {@name/existing-module} --scope={@name/new-package-name} # yarn lerna add @trkm/http-cookies-ts --scope=@trkm/http-context
```

### Linking To Another Project

```bash
cd ./packages/{package-name}
yarn lerna add {package-name-linking-to}

# example
cd ./package/http-context
yarn lerna add object-json-path-ts
```

# TODO

* Add documentation on how to run tests across all packages.
