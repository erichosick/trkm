import formApply from '@trkm/html-form-apply-ts';
import { wpContext } from '@trkm/http-context-ts/src/wp-context';
import { trackingDefault } from '../src/index'

describe('trackingDefault', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should safely set values on the form when all values are provided', () => {
    const revokeObjectURLMocked = jest.fn();
    window.URL.revokeObjectURL = revokeObjectURLMocked;

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
        search: '?utm_medium=medium01&utm_campaign=campaign02&utm_term=term03&utm_content=content04&utm_id=utmId05&adset_id=adset06',
      }
    });

    document.body.innerHTML = `
      <form>
        <input id="utm_medium" />
        <input id="utm_campaign" />
        <input id="utm_term" />
        <input id="utm_content" />
        <input id="utm_id" />
        <input id="adset_id" />
        <input id="lp_url" />
        <input id="lp_params" />
        <input id="tm_referer" />
        <input id="tm_event_id" />
      </form>
    `;

    const context = wpContext();

    let utmMedium = document.getElementById('utm_medium') as HTMLInputElement;
    expect(utmMedium.value).toEqual('');

    let utmCampaign = document.getElementById('utm_campaign') as HTMLInputElement;
    let utmTerm = document.getElementById('utm_term') as HTMLInputElement;
    let utmContent = document.getElementById('utm_content') as HTMLInputElement;
    let utmId = document.getElementById('utm_id') as HTMLInputElement;
    let adsetId = document.getElementById('adset_id') as HTMLInputElement;
    let lpUrl = document.getElementById('lp_url') as HTMLInputElement;
    let lpParams = document.getElementById('lp_params') as HTMLInputElement;
    let tmReferer = document.getElementById('tm_referer') as HTMLInputElement;
    let tmEventId = document.getElementById('tm_event_id') as HTMLInputElement;


    formApply(trackingDefault, context);

    expect(utmMedium.value).toEqual('medium01');
    expect(utmCampaign.value).toEqual('campaign02');
    expect(utmTerm.value).toEqual('term03');
    expect(utmContent.value).toEqual('content04');
    expect(utmId.value).toEqual('utmId05');
    expect(adsetId.value).toEqual('adset06');
    expect(lpUrl.value).toEqual('http://localhost/');
    expect(lpParams.value).toEqual('?utm_medium=medium01&utm_campaign=campaign02&utm_term=term03&utm_content=content04&utm_id=utmId05&adset_id=adset06');
    expect(tmReferer.value).toEqual('');
    expect(tmEventId.value.length).toEqual(36); // should be a uuid
  });
});
