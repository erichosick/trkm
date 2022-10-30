import { WP_CONTEXT_SESSION_KEY } from '@trkm/types';
import merge from 'ts-deepmerge';

/**
 * Initializes or resets the current website session: clearing out any existing session information.
 * @param session_key (optional) - When provided, a custom session
 * storage key is used. By default WP_CONTEXT_SESSION_KEY defined in @trkm/types
 * is used.
 */
export const sessionInit = (
  session_key: string = WP_CONTEXT_SESSION_KEY
): void => {
  sessionStorage.setItem(session_key, JSON.stringify({}));
};

/**
 * Returns the current webpage session.
 * @param session_key (optional) - When provided, a custom session
 * storage key is used. By default WP_CONTEXT_SESSION_KEY defined in @trkm/types
 * is used.
 */
export const sessionGet = (
  session_key: string = WP_CONTEXT_SESSION_KEY
): object => {
  const context = sessionStorage.getItem(session_key);
  return context ? JSON.parse(context) : {};
};

/**
 * DeepMerges new session data with existing session data.
 * @param context The configuration we are storing in the session.
 * @param session_key (optional) - When provided, a custom session
 * storage key is used. By default WP_CONTEXT_SESSION_KEY defined in @trkm/types
 * is used.
 */
export const sessionMerge = (
  context: object,
  session_key: string = WP_CONTEXT_SESSION_KEY
): object => {
  const mergedContext = merge(sessionGet(session_key), context);
  sessionStorage.setItem(
    session_key,
    JSON.stringify(mergedContext)
  );
  return mergedContext;
};
