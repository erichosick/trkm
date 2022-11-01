import { TrkmLibrary } from '@trkm/library-ts';

declare module globalThis {
  let trkm: TrkmLibrary
};

export default globalThis;
