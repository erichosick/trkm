// importing index builds globalThis.trkm
import { wpContext } from '../src/index';

describe('http-context uuid', () => {

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
    const testObj = wpContext();
    expect(testObj).toEqual({
      cookies: {
        haveA: 'final_cookie',
      },
      document: {
        browser: {
          cookieEnabled: true,
          platform: '',
          userAgent: 'Mozilla/5.0 (darwin) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/20.0.2',
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
