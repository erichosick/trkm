import {
  sessionGet,
  sessionInit,
  sessionMerge
} from '../src/index';

import merge from 'ts-deepmerge';

describe('session (cookiesToObj)', () => {

  describe('valid scenarios - using default context id', () => {
    beforeEach(() => {
      // clear out the session.
      localStorage.clear()
    });

    afterEach(() => {
      // clear out the session.
      sessionInit();
    });

    it('should return nothing when get is called before sessionInit', () => {
      expect(sessionGet()).toEqual({});
    });

    it('should return nothing when the session context is empty', () => {
      expect(sessionGet()).toEqual({});
    });

    it('should set and clear out a session when init is called', () => {
      expect(sessionGet()).toEqual({});
      sessionMerge({ setting: 'value' })
      expect(sessionGet()).toEqual({ setting: 'value' });
      sessionInit();
      expect(sessionGet()).toEqual({});
    });

    it('should support deep merging of context', () => {
      const initialContext = {
        a: {
          b: 1,
          c: 2
        },
        d: 'str'
      };

      const newContext = {
        a: {
          b: 4,
          f: 3,
        },
        r: 'rrrr'
      };

      const finalContext = merge(initialContext, newContext);

      sessionMerge(initialContext)
      expect(sessionGet()).toEqual(initialContext);
      sessionMerge(newContext);
      expect(sessionGet()).toEqual(finalContext);
    });
  });

  describe('valid scenarios - using custom context id', () => {
    beforeEach(() => {
      // clear out the session.
      sessionInit('my_session_id');
    });
    afterEach(() => {
      // clear out the session.
      sessionInit('my_session_id');
    });
    it('should return nothing when the session context is empty', () => {
      expect(sessionGet('my_session_id')).toEqual({});
    });

    it('should set and clear out a session when init is called', () => {
      expect(sessionGet('my_session_id')).toEqual({});
      sessionMerge({ setting: 'value' }, 'my_session_id')
      expect(sessionGet('my_session_id')).toEqual({ setting: 'value' });
      sessionInit('my_session_id');
      expect(sessionGet('my_session_id')).toEqual({});
    });

    it('should support deep merging of context', () => {
      const initialContext = {
        a: {
          b: 1,
          c: 2
        },
        d: 'str'
      };

      const newContext = {
        a: {
          b: 4,
          f: 3,
        },
        r: 'arrrr'
      };

      const finalContext = merge(initialContext, newContext);

      sessionMerge(initialContext, 'my_session_id')
      expect(sessionGet('my_session_id')).toEqual(initialContext);
      sessionMerge(newContext, 'my_session_id');
      expect(sessionGet('my_session_id')).toEqual(finalContext);
    });
  });

});

