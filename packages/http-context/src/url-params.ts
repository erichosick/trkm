/**
 * Defining an object interface with string keys and string values.
 * Example:
 * {
 *   "userName": "User",
 *   "userAge": "42",
 * }
 */
export interface ObjStrKeyVal {
  [key: string]: string
}

export type alterName = (info: string) => string;
export interface Options {
  alter?: alterName
}

/**
 * Method signature of our default function
 */
export type urlParamsSignature = (
  search: string,
  options?: Options
) => ObjStrKeyVal;

/**
 * Generates a uuid using URL.createObjectURL
 * @returns A string uuid.
 */
const urlParams: urlParamsSignature = (
  search: string,
  options?: Options
): ObjStrKeyVal => {
  const result: ObjStrKeyVal = {};
  const urls = new URLSearchParams(search);
  for (let url of urls) {
    const finalPropertyName = (options?.alter ?
      options.alter(url[0]) : url[0]).trim();
    if (result[finalPropertyName] !== undefined) {
      throw new Error(`URL search parameters had more than one search parameter with a parameter named '${finalPropertyName}'.`);
    }

    result[finalPropertyName] = url[1];
  }
  return result;
}

export default urlParams;