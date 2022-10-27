import globalThis from '../src/globals';

// importing index builds globalThis.trkm
import '../src/index';
import { validate } from 'uuid';

describe('http-context uuid', () => {
  const revokeObjectURLMocked = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should expose trkm.uuidGenerate', () => {
    window.URL.revokeObjectURL = revokeObjectURLMocked;
    const uuid = globalThis.trkm.uuidGenerate();
    expect(validate(uuid)).toEqual(true);
    expect(revokeObjectURLMocked).toBeCalled()
  });

  it('should expose trkm.insertIntoObject', () => {
    const testObj = {};
    globalThis.trkm.insertIntoObject(testObj, { path: 'some', value: 'value' });
    expect(testObj).toEqual({
      some: 'value',
    })
  });

  it('should expose trkm.context.cookies', () => {
    const testObj = globalThis.trkm.context.cookies('haveA=cookie');
    expect(testObj).toEqual({
      haveA: 'cookie',
    })
  });

  it('should expose trkm.context.all', () => {
    // mock window.location.search
    global.window = Object.create(window);
    const search = "?a=search+parameter";
    Object.defineProperty(window, 'location', {
      value: {
        search: search
      }
    });

    document.cookie = 'haveA=final_cookie';
    const testObj = globalThis.trkm.context.all();
    expect(testObj).toEqual({
      cookies: {
        haveA: 'final_cookie',
      },
      urlParams: {
        a: 'search parameter',
      },
    })
  });
});
