import { ContextGetConfig, ContextSource } from '@trkm/html-types-ts';
import { getFromObject } from '@trkm/object-json-path-ts';
import uuidGenerateV4 from '@trkm/http-uuid-generate-v4-ts';

const valueFromSource = (
  context: unknown,
  source: ContextSource
): string | undefined => {
  let result;
  switch (source.type) {
    case 'context':
      if (source.jsonPath) {
        result = getFromObject(context, source.jsonPath);
      }
      break;
    case 'uuidV4':
      result = uuidGenerateV4();
      break;
    /* istanbul ignore next */ // since source.type is an enumeration
    default:
      break;
  }

  // make sure we always return undefined
  return result === null ? undefined : result;
};

/**
 * 
 * @param config 
 * @returns 
 */
const contextGet = (
  context: unknown,
  config: ContextGetConfig
): unknown => {
  let finalValue = config.default;

  // if a single source is provided then let's just wrap it in
  // an array so we can re-use the code below.
  const sources = Array.isArray(config.source) ? config.source :
    config.source ? [config.source] : [];

  for (const source of sources) {
    finalValue = valueFromSource(context, source);
    if (undefined !== finalValue) {
      break;
    }
  }

  if (config.required === true && finalValue === undefined) {
    // eslint-disable-next-line no-console
    console.error(`Better error message`);
  }
  return finalValue;
}

export default contextGet;
