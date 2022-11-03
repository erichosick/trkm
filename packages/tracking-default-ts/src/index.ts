import { FormDestination, InputDestination } from '@trkm/html-types-ts';

// See https://docs.google.com/document/d/1QS6EMX0cpj63APc007PRfyZNFtZkGdff0j0gBqmkrfA/edit# for requirements.

const destinations: InputDestination[] = [
  {
    pullFrom: 'document.url.urlParams.utm_source',
    destination: 'utm_source'
  },
  {
    pullFrom: 'document.url.urlParams.utm_medium',
    destination: 'utm_medium'
  },
  {
    pullFrom: 'document.url.urlParams.utm_campaign',
    destination: 'utm_campaign'
  },
  {
    pullFrom: 'document.url.urlParams.utm_term',
    destination: 'utm_term'
  },
  {
    pullFrom: 'document.url.urlParams.utm_content',
    destination: 'utm_content'
  },
  {
    pullFrom: 'document.url.urlParams.utm_id',
    destination: 'utm_id'
  },
  {
    pullFrom: 'document.url.urlParams.adset_id',
    destination: 'adset_id'
  },
  {
    pullFrom: 'document.url.href',
    destination: 'lp_url'
  },
  {
    pullFrom: 'document.url.search',
    destination: 'lp_params'
  },
  {
    pullFrom: 'document.referer',
    destination: 'tm_referer'
  },
  {
    pullFrom: {
      source: {
        type: 'uuidV4',
      }
    },
    destination: 'tm_event_id'
  },

];

// Assumption is that there is only one form per page so formQuery is not
// needed
export const trackingDefault: FormDestination = {
  // by default, all of our definitions are not required
  required: false,
  destination: destinations
};
