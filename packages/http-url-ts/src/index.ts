import {
  DataToObjectOptions,
  DataToObjectSignature,
  ObjectKeyStrValueStr
} from '@trkm/types';

/**
 * Converts a string of the format '?keyName01=keyValue01&keyName02=keyValue02`
 * (the key/value pair format returned by window.location.search) to an object
 * whose properties are the `keyName` and value is the `keyValue`.
 * WARNING: Key names are case sensitive along with javascript object
 * properties.
 * @param keyValueString - A string containing zero or more key/value pairs of
 *   the format `?keyName01=keyValue01&`
 * @param options:
 *   mutateProperty - Lambda with a function signature of
 *    `(propertyName: string) => string;` used to convert the key name before
 *     using the key name as an object property.
 * @returns - An object whose properties are the properties of all keys in the
 *            keyValueString and values are the value of the keyValueString.
 */
export const urlParamsToObj: DataToObjectSignature = (
  search: string,
  options?: DataToObjectOptions
): ObjectKeyStrValueStr => {
  const result: ObjectKeyStrValueStr = {};
  const urls = new URLSearchParams(search);
  for (let url of urls) {
    const finalPropertyName = (options?.mutateProperty ?
      options.mutateProperty(url[0]) : url[0]).trim();
    if (result[finalPropertyName] !== undefined) {
      throw new Error(`URL search parameters had more than one search parameter with a parameter named '${finalPropertyName}'.`);
    }

    result[finalPropertyName] = url[1];
  }
  return result;
}
