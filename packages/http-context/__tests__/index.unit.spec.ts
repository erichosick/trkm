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
    const uuid = globalThis.trkm.uuidGenerateV4();
    expect(validate(uuid)).toEqual(true);
    expect(revokeObjectURLMocked).toBeCalled()
  });

  // it('should expose trkm.insertIntoObject', () => {
  //   const testObj = {};
  //   globalThis.trkm.insertIntoObject(testObj, { path: 'some', value: 'value' });
  //   expect(testObj).toEqual({
  //     some: 'value',
  //   })
  // });

  // it('should expose trkm.context.cookies', () => {
  //   const testObj = globalThis.trkm.context.cookies('haveA=cookie');
  //   expect(testObj).toEqual({
  //     haveA: 'cookie',
  //   })
  // });

  it('should expose trkm.context', () => {
    // mock window.location
    global.window = Object.create(window);
    Object.defineProperty(window, 'location', {
      value: {
        hash: '#ahash',
        host: 'localhost',
        hostname: 'localhost',
        href: 'http://localhost/',
        origin: 'http://localhost',
        pathname: '/',
        port: '34',
        protocol: 'http:',
        search: '?a=search+parameter&another=parameter',
      }
    });

    document.cookie = 'haveA=final_cookie';
    const testObj = globalThis.trkm.context();
    expect(testObj).toEqual({
      cookies: {
        haveA: 'final_cookie',
      },
      document: {
        browser: {
          cookieEnabled: true,
          platform: '',
          userAgent: 'Mozilla/5.0 (darwin) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/20.0.1',
        },
        language: 'en-US',
        referrer: '',
        title: '',
        url: {
          hash: '#ahash',
          host: 'localhost',
          hostname: 'localhost',
          href: 'http://localhost/',
          origin: 'http://localhost',
          pathname: '/',
          port: '34',
          protocol: 'http:',
          search: '?a=search+parameter&another=parameter',
          urlParams: {
            a: 'search parameter',
            another: 'parameter',
          },
        },
      },
    })
  });
});
