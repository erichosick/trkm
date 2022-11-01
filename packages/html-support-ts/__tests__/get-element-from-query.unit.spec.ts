import { getElementFromQuery } from '../src/index';

describe('getElementFromQuery', () => {
  describe('tag name only', () => {
    it('should should return an element by tag name when only one element exits', () => {
      document.body.innerHTML = `<input></input>`;

      expect(getElementFromQuery({
        tag: 'input',
      })).toBeDefined();
    });


    it('should error out when multiple elements by tag name are found.', () => {
      document.body.innerHTML = `<input></input><input></input>`;

      expect(() => {
        getElementFromQuery({
          tag: 'input',
        })
      }).toThrow('Error: More than one html element of tag \'input\' was found.')
    });

    it('should error out when no elements by tag name are found.', () => {
      document.body.innerHTML = `<input></input>`;

      expect(() => {
        getElementFromQuery({
          tag: 'div',
        })
      }).toThrow('Error: No html element of tag \'div\' was found.')
    })
  });

  describe('tag attribute id with no attribute value set (attribute value not required)', () => {
    it('should should return an element by tag name when only one element exits', () => {
      document.body.innerHTML = `<input></input>`;

      expect(getElementFromQuery({
        tag: 'input',
        name: 'tag',
      })).toBeDefined();
    });


    it('should error out when multiple elements by tag name are found.', () => {
      document.body.innerHTML = `<input></input><input></input>`;

      expect(() => {
        getElementFromQuery({
          tag: 'input',
          name: 'tag',
        })
      }).toThrow('Error: More than one html element of tag \'input\' was found using attribute named \'tag\'.')
    });

    it('should error out when no elements by tag name are found.', () => {
      document.body.innerHTML = `<input></input>`;

      expect(() => {
        getElementFromQuery({
          tag: 'div',
          name: 'tag',
        })
      }).toThrow('Error: No html element of tag \'div\' was found using attribute named \'tag\'.')
    })
  });

  describe('id with attribute name and attribute value set', () => {
    it('should should return an element by id when only one element exits', () => {
      document.body.innerHTML = `<input id='idValue'></input>`;

      expect(getElementFromQuery({
        tag: 'input',
        name: 'id',
        value: 'idValue',
      })
      ).toBeDefined();
    });

    // id always returns a single element because id is globally unique
    // it('should error out when multiple elements by tag are found.', () => {...}

    it('should error out when no elements by id are found.', () => {
      document.body.innerHTML = `<input></input>`;

      expect(() => {
        getElementFromQuery({
          tag: 'div',
          name: 'id',
          value: 'idValue',
        })
      }).toThrow('Error: No html element of tag \'div\' was found using attribute named \'id\' having value \'idValue\'.')
    })
  });

  describe('name with attribute name and attribute value set', () => {
    it('should should return an element by name when only one element exits', () => {
      document.body.innerHTML = `<div name='nameValue'></div><div id='idValue'></div>`;

      expect(getElementFromQuery({
        tag: 'div',
        name: 'name',
        value: 'nameValue',
      })
      ).toBeDefined();
    });

    it('should error out when multiple elements by name are found.', () => {
      document.body.innerHTML = `<div name='nameValue'></div><div name='nameValue'></div>`;

      expect(() => {
        getElementFromQuery({
          tag: 'div',
          name: 'name',
          value: 'nameValue',
        })
      }).toThrow('Error: More than one html element of tag \'div\' was found using attribute named \'name\' having value \'nameValue\'.');
    });

    it('should error out when no elements by id are found.', () => {
      document.body.innerHTML = `<input></input>`;

      expect(() => {
        getElementFromQuery({
          tag: 'div',
          name: 'id',
          value: 'idValue',
        })
      }).toThrow('Error: No html element of tag \'div\' was found using attribute named \'id\' having value \'idValue\'.')
    })
  });


  describe('class with attribute name and attribute value set', () => {
    it('should should return an element by class when only one element exits', () => {
      document.body.innerHTML = `<div class='classValue'></div><div id='idValue'></div>`;

      expect(getElementFromQuery({
        tag: 'div',
        name: 'class',
        value: 'classValue',
      })
      ).toBeDefined();
    });

    it('should error out when multiple elements by name are found.', () => {
      document.body.innerHTML = `<div name='nameValue'></div><div name='nameValue'></div>`;

      expect(() => {
        getElementFromQuery({
          tag: 'div',
          name: 'name',
          value: 'nameValue',
        })
      }).toThrow('Error: More than one html element of tag \'div\' was found using attribute named \'name\' having value \'nameValue\'.');
    });

    it('should error out when no elements by id are found.', () => {
      document.body.innerHTML = `<input></input>`;

      expect(() => {
        getElementFromQuery({
          tag: 'div',
          name: 'name',
          value: 'nameValue',
        })
      }).toThrow('Error: No html element of tag \'div\' was found using attribute named \'name\' having value \'nameValue\'.')
    })
  });

});
