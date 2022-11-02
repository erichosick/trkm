// -----------------------------------------------------------------------------

/**
 * Context session id used by tracking madness.
 */
export const WP_CONTEXT_SESSION_KEY = 'tm_context_session';

// -----------------------------------------------------------------------------

/**
 * Defining an object interface with string keys and string values.
 * Example:
 * {
 *   "userName": "User",
 *   "userAge": "42",
 * }
 */
export interface ObjectKeyStrValueStr {
  [key: string]: string
}

// -----------------------------------------------------------------------------

/**
 * The method signature used to take alter a property name. An example would
 * be converting a property to all lower case.
 */
export type MutatePropertyNameSignature = (propertyName: string) => string;

/**
 * Options passed to a function that implements a
 * DataToObjectSignature.
 */
export interface DataToObjectOptions {

  /**
   * Function used to mutate the key of a key/value pair before using that key
   * as the name of an object property. For example, we may convert the key
   * to lower case before using it as a property.
   */
  mutateProperty?: MutatePropertyNameSignature
}

/**
 * Method signature for functions that convert a string embedded with multiple
 * key/value pairs and convert that to into an object where the key of the
 * key/value pair becomes an object property name and the value of the key/value
 * pair becomes the value. Examples are converting http cookies or search
 * parameters of a url into an object.
 */
export type DataToObjectSignature = (
  keyValueString: string,
  options?: DataToObjectOptions
) => ObjectKeyStrValueStr;
