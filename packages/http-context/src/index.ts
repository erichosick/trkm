import globalThis from './globals';

import uuidGenerateV4 from "@trkm/http-uuid-generate-v4-ts";
import { cookiesToObj } from '@trkm/http-cookies-ts';
import { insertIntoObject } from '@trkm/object-json-path-ts';
import httpContextAll from './http-context-all';
import { urlParamsToObj } from '@trkm/http-url-ts';

// NOTE: We define everything as pure typescript (see libraries like
// @trkm/http-cookies-ts) and expose them as an interface using
// webpack to build our final API.

globalThis.trkm = {
  uuidGenerateV4,
  insertIntoObject,
  context: {
    all: httpContextAll,
    cookies: cookiesToObj,
    urlParams: urlParamsToObj,
  }
}
