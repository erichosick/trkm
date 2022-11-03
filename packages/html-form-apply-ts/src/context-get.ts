import { ContextConfigResultType, ContextGetConfig, ContextSource } from '@trkm/html-types-ts';
import { getFromObject } from '@trkm/object-json-path-ts';
import uuidGenerateV4 from '@trkm/http-uuid-generate-v4-ts';

export type ValueFromSourceSignature = (
  source: ContextSource,
  context?: object
) => ContextConfigResultType;

/**
 * 
 * @param context - An instance of a javascript object.
 * @param source 
 * @returns 
 */
const valueFromSource: ValueFromSourceSignature = (
  source: ContextSource,
  context?: object,
): ContextConfigResultType => {
  let result = undefined;
  switch (source.type) {
    case 'context':
      if (source.jsonPath) {
        if (context !== undefined) {
          result = getFromObject(context, source.jsonPath, source.required);
        } // else { we are unable to get any value from the context so do nothing}
      }
      break;
    case 'uuidV4':
      result = uuidGenerateV4();
      break;
    /* istanbul ignore next */ // since source.type is an enumeration
    default:
      break;
  }

  return result;
};


export type ContextGetSignature = (
  config: ContextGetConfig,
  context?: object
) => ContextConfigResultType;

/**
 * 
 * @param config 
 * @returns 
 */
const contextGet = (
  config: ContextGetConfig,
  context?: object
): ContextConfigResultType => {
  let finalValue = config.default;

  // set default to required
  config.required = config.required === undefined ? true : false;

  // if a single source is provided then let's just wrap it in
  // an array so we can re-use the code below.
  const sources = Array.isArray(config.source) ? config.source :
    config.source ? [config.source] : [];

  for (const source of sources) {

    // override the source required with the parent configuration required if
    // the source was not defined in the first place.
    if (source.required === undefined) {
      source.required = config.required;
    }
    finalValue = valueFromSource(source, context);
    if (undefined !== finalValue) {
      break;
    }
  }

  if (config.required === true && finalValue === undefined) {
    const queryStr = JSON.stringify(config).replace(/"/g, '\'',)
    throw Error(`Value not found in context using query ${queryStr}. Setting required to false will bypass this error.`)
  } // else do nothing: just return the value

  return finalValue;
}

export default contextGet;
