import globalThis from '../src/globals';
// executes globalThis.trkm = library;
import '../src/index';


describe('globalThis', () => {
  it('should build out global this', () => {
    expect(globalThis.trkm).toBeDefined();
  });
});
