import globalThis from './globals';

import uuidGenerate from "./uuid-generate";
import { cookiesToObj } from '@trkm/http-cookies-ts';
import { insertIntoObject } from '@trkm/object-json-path-ts';
import httpContextAll from './http-context-all';
import urlParams from './url-params';

// NOTE: We define everything as pure typescript (see libraries like
// @trkm/http-cookies-ts) and expose them as an interface using
// webpack to build our final API.

globalThis.trkm = {
  uuidGenerate,
  insertIntoObject,
  context: {
    all: httpContextAll,
    cookies: cookiesToObj,
    urlParams: urlParams,
  }
}
