/**
 * Method signature of our default function
 */
export type UuidGenerateSignature = () => string;

/**
 * Generates a Version 4 uuid using URL.createObjectURL
 * @returns A string uuid.
 */
const uuidGenerateV4: UuidGenerateSignature = (): string => {
  // NOTE: The crypto.randomUUID() doesn't always generate a valid uuid.

  // *Generates a uuid using createObjectUrl. The uuid returned is a string. Use
  //* the <https://www.npmjs.com/package/uuid> library to convert the string to a
  // * uuid.

  let url: string = '';
  try {
    // generate a url using createObjectURL
    // see <https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL>
    url = URL.createObjectURL(new Blob());
  } finally {
    // need to revoke the url now.
    // See <https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL>
    URL.revokeObjectURL(url);
  }
  // pull out the uuid from the url which is at the end of the url. Example
  // result from createObjectUrl:
  // blob:<https://abhishekdutta.org/e54dbbe2-14cd-492f-bb12-1606112c1b41>'
  return url.substring(url.lastIndexOf("/") + 1);

}

export default uuidGenerateV4;