import globalThis from './globals';
import library from '@trkm/library-ts';

// NOTE: We define everything as pure typescript (see libraries like
// @trkm/http-cookies-ts) and expose them as an interface using
// webpack to build our final API.

globalThis.trkm = library;