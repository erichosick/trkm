# **@trkm/http-session-deepmerge-ts**

Stores a page's context in a session: deep merging existing session context as needed.

## Features

* Very compact way to easily maintain state between webpages on a site.
* 100% typescript.

## Usage

As a user navigates between pages, some context may be lost. Specifically the initial http parameters passed on a given landing page. The intent of the `http-session-deepmerge-ts` is to maintain the initial landing page context as a user navigates throughout a website. This also means that any existing context may be overwritten when navigation to a new page. Keep this in mind when using `http-session-deepmerge-ts`.

### **SessionInit**

Initializes or resets the current website session: clearing out any existing session information.

* @param session_key (optional) - When provided, a custom session storage key is used. By default WP_CONTEXT_SESSION_KEY defined in @trkm/types is used.

```typescript
import { sessionInit } from '@trkm/http-session-deepmerge-ts';

// uses the default session key defined in WP_CONTEXT_SESSION_KEY
sessionInit();

// use a key
sessionInit('special_session_data_key');
```

### **SessionGet**

Returns the current webpage session.

* @param session_key (optional) - When provided, a custom session storage key is used. By default WP_CONTEXT_SESSION_KEY defined in @trkm/types is used.

```typescript
import { sessionGet } from '@trkm/http-session-deepmerge-ts';

// uses the default session key defined in WP_CONTEXT_SESSION_KEY
sessionGet();

// use a key
sessionGet('special_session_data_key');
```

### **SessionMerge**

DeepMerges new session data with existing session data.

* @param context The configuration we are storing in the session.
* @param session_key (optional) - When provided, a custom session storage key is used. By default WP_CONTEXT_SESSION_KEY defined in @trkm/types is used.

```typescript
import { sessionGet, sessionMerge } from '@trkm/http-session-deepmerge-ts';

// uses the default session key defined in WP_CONTEXT_SESSION_KEY
sessionMerge({selectedItem: 'RJ4454', readyToPay: false });
sessionMerge({readyToPay: true });

const info = sessionGet();
console.log(info);

// output
{
  selectedItem: 'RJ4454',
  readyToPay: true
}
```

## Intent

* No Emitted Javascript - The intent is to import this typescript library into a typescript project: compiling to Javascript occurring within the project.

## Development

See the [monorepo readme](https://www.github.com/erichosick/trkm).

## License

Licensed under [MIT](./LICENSE.md).
