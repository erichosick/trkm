import { WP_CONTEXT_SESSION_KEY } from '@trkm/types';
import merge from 'ts-deepmerge';


export type SessionInitSignature = (
  sessionKey?: string
) => void;

/**
 * Initializes or resets the current website session: clearing out any existing session information.
 * @param sessionKey (optional) - When provided, a custom session
 * storage key is used. By default WP_CONTEXT_SESSION_KEY defined in @trkm/types
 * is used.
 */
export const sessionInit: SessionInitSignature = (
  sessionKey: string = WP_CONTEXT_SESSION_KEY
): void => {
  sessionStorage.setItem(sessionKey, JSON.stringify({}));
};


export type SessionGetSignature = (
  sessionKey?: string
) => object;
/**
 * Returns the current webpage session.
 * @param sessionKey (optional) - When provided, a custom session
 * storage key is used. By default WP_CONTEXT_SESSION_KEY defined in @trkm/types
 * is used.
 */
export const sessionGet: SessionGetSignature = (
  sessionKey: string = WP_CONTEXT_SESSION_KEY
): object => {
  const context = sessionStorage.getItem(sessionKey);
  return context ? JSON.parse(context) : {};
};


export type SessionMergeSignature = (
  context: object,
  sessionKey?: string
) => object;

/**
 * DeepMerges new session data with existing session data.
 * @param context The configuration we are storing in the session.
 * @param sessionKey (optional) - When provided, a custom session
 * storage key is used. By default WP_CONTEXT_SESSION_KEY defined in @trkm/types
 * is used.
 */
export const sessionMerge: SessionMergeSignature = (
  context: object,
  sessionKey: string = WP_CONTEXT_SESSION_KEY
): object => {
  const mergedContext = merge(sessionGet(sessionKey), context);
  sessionStorage.setItem(
    sessionKey,
    JSON.stringify(mergedContext)
  );
  return mergedContext;
};
