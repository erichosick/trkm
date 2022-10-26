/**
 * Method signature of our default function
 */
export type uuidGenerateSignature = () => string;

/**
 * Generates a uuid using crypto.
 * @returns A string uuid.
 */
const uuidGenerate: uuidGenerateSignature = (): string => {
  return crypto.randomUUID();
}

export default uuidGenerate;