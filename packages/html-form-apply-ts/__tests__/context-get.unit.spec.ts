import { ContextGetConfig } from '@trkm/html-types-ts';
import contextGet from '../src/context-get';

describe('contextGet', () => {
  describe('valid scenarios', () => {

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should default to context if source.type is not provided', () => {
      const search: ContextGetConfig = {
        source: [{
          jsonPath: 'user.age'
        }]
      };
      expect(contextGet(search, { user: { age: 5 } })).toEqual(5);
    });

    it('should find a form if only one exists on the page', () => {
      const search: ContextGetConfig = {
        required: false,
      };
      expect(contextGet(search, undefined)).toBeUndefined();
    });

    it('should get a uuid v4', () => {
      const revokeObjectURLMocked = jest.fn();
      window.URL.revokeObjectURL = revokeObjectURLMocked;

      const search: ContextGetConfig = {
        source: {
          type: 'uuidV4'
        }
      };

      const uuid = contextGet(search);
      expect(typeof uuid === 'string').toBeTruthy();
      expect((uuid as string).length).toEqual(36);
    });

  });

  describe('required values returned', () => {
    it('should throw an error when required is true an no value is found', () => {
      expect(() => { contextGet({}, undefined); })
        .toThrowError("Value not found in context using query {'required':true}. Setting required to false will bypass this error.");
    });
  });

});
