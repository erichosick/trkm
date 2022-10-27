// THOUGHTS: Log a warning if invalid cookies are ignored. Perhaps write a
// similar function that can provide in-depth debug information.

import {
  DataToObjectOptions,
  DataToObjectSignature,
  ObjectKeyStrValueStr
} from '@trkm/types';

/**
 * Converts a string of the format 'keyName01=keyValue01;keyName02=keyValue02`
 * (the key/value pair format returned by document.cookie) to an object
 * whose properties are the `keyName` and value is the `keyValue`.
 * WARNING: Key names are case sensitive along with javascript object
 * properties. See [Http Cookies](https://developer.mozilla.org/en-US/docs/web/api/document/cookie)
 * for details.
 * @param keyValueString - A string containing zero or more key/value pairs of
 *   the format `keyName01=keyValue01;keyName02=keyValue02`
 * @param options:
 *   mutateProperty - Lambda with a function signature of
 *    `(propertyName: string) => string;` used to convert the key name before
 *     using the key name as an object property.
 * @returns - An object whose properties are the properties of all keys in the
 *            keyValueString and values are the value of the keyValueString.
 */
export const cookiesToObj: DataToObjectSignature = (
  keyValueString: string,
  options?: DataToObjectOptions
): ObjectKeyStrValueStr => {
  const result: ObjectKeyStrValueStr = {};
  for (let cookie of keyValueString.split(';')) {
    // cases where the cookie is empty. For example when cookies = ';;;;'
    if (cookie !== '') {
      const cookieParts = cookie.split('=');
      if (cookieParts.length === 2) {
        const decodedPropertyName = decodeURIComponent(cookieParts[0]);
        const finalPropertyName = (options?.mutateProperty ?
          options.mutateProperty(decodedPropertyName) : decodedPropertyName).trim();
        // NOTE: It should not be possible for document.cookie to have more than
        // one cookie of the same name unless we are converting the property names
        // to lower case.
        if (result[finalPropertyName] !== undefined) {
          throw new Error(`Cookies had more than one cookie with a property named '${finalPropertyName}'.`);
        }
        result[finalPropertyName] = decodeURIComponent(cookieParts[1]);
      } // else ignore the invalid cookie.
    }
  }
  return result;
}
