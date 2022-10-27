import urlParams from '../src/url-params';

const toLowerCase = (input: string) => {
  return input.toLowerCase();
}
describe('urlParams', () => {
  describe('url params', () => {
    it('should generate an object based on parameters', () => {
      const paramsObj = urlParams('?q=some+thing&anotherParam=some+value');
      expect(paramsObj).toEqual({
        q: 'some thing',
        anotherParam: 'some value',
      }
      )
    });

    it('should generate an object cleaning up the parameter name', () => {
      const paramsObj = urlParams('?noSpaces=some+thing&+hadSpaces+=spaces');
      expect(paramsObj).toEqual({
        noSpaces: 'some thing',
        hadSpaces: 'spaces',
      }
      )
    });

    it('should trim parameters with spaces/tabs/etc. at the start or end of the cookie parameter name.', () => {
      const paramsObj = urlParams('?noSpaces=some+thing&+hadSpaces+=spaces');
      expect(paramsObj).toEqual({
        noSpaces: 'some thing',
        hadSpaces: 'spaces',
      }
      )
    });

    it('should support converting property names to lower case.', () => {
      const cookieObj = urlParams('?UPPER=case', { alter: toLowerCase });
      expect(cookieObj).toEqual({ upper: 'case' })
    });

  });


  describe('invalid scenarios', () => {

    it('should throw an error when the two cookies have the same name', () => {
      expect(() => urlParams('?duplicate=value&duplicate=value'))
        .toThrow('URL search parameters had more than one search parameter with a parameter named \'duplicate\'.');

      expect(() => urlParams('?SIMPLE=value&simple=value', { alter: toLowerCase }))
        .toThrow('URL search parameters had more than one search parameter with a parameter named \'simple\'.');

    });
  });
});