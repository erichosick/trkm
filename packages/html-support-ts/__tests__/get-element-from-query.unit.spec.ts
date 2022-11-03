import { getElementFromQuery } from '../src/index';

describe('getElementFromQuery', () => {
  describe('tag name only', () => {
    it('should return an element by tag name when only one element exits', () => {
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
      }).toThrow("More than one HTMLElement found. Query was {'tag':'input'}.")
    });

    it('should error out when no elements by tag name are found.', () => {
      document.body.innerHTML = `<input></input>`;

      expect(() => {
        getElementFromQuery({
          tag: 'div',
        })
      }).toThrow("No HTMLElement found. Query was {'tag':'div'}.")
    })
  });

  describe('tag attribute id with no attribute value set (attribute value not required)', () => {
    it('should return an element by tag name when only one element exits', () => {
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
      }).toThrow("More than one HTMLElement found. Query was {'tag':'input','name':'tag'}.")
    });

    it('should error out when no elements by tag name and attribute name are found.', () => {
      document.body.innerHTML = `<input></input>`;

      expect(() => {
        getElementFromQuery({
          tag: 'div',
          name: 'tag',
        })
      }).toThrow("No HTMLElement found. Query was {'tag':'div','name':'tag'}.")
    })
  });

  describe('id with attribute name and attribute value set', () => {
    it('should return an element by id when only one element exits', () => {
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
      }).toThrow("No HTMLElement found. Query was {'tag':'div','name':'id','value':'idValue'}.")
    })
  });

  describe('name with attribute name and attribute value set', () => {
    it('should return an element by name when only one element exits', () => {
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
      }).toThrow("More than one HTMLElement found. Query was {'tag':'div','name':'name','value':'nameValue'}.");
    });

    it('should error out when no elements by id are found.', () => {
      document.body.innerHTML = `<input></input>`;

      expect(() => {
        getElementFromQuery({
          tag: 'div',
          name: 'id',
          value: 'idValue',
        })
      }).toThrow("No HTMLElement found. Query was {'tag':'div','name':'id','value':'idValue'}.")
    })
  });


  describe('class with attribute name and attribute value set', () => {
    it('should return an element by class when only one element exits', () => {
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
      }).toThrow("More than one HTMLElement found. Query was {'tag':'div','name':'name','value':'nameValue'}.");
    });

    it('should error out when no elements by id are found.', () => {
      document.body.innerHTML = `<input></input>`;

      expect(() => {
        getElementFromQuery({
          tag: 'div',
          name: 'name',
          value: 'nameValue',
        })
      }).toThrow("No HTMLElement found. Query was {'tag':'div','name':'name','value':'nameValue'}.")
    })
  });

  describe('invalid query name', () => {
    it(`should error when an unsupported attribute name is provided.`, () => {
      document.body.innerHTML = `<form id='user'><input id='one' /></form>`;
      expect(() => { getElementFromQuery({ 'name': 'id2', 'value': 'someValue' }); })
        .toThrowError("Unsupported query name 'id2'.")
    });

  });


  describe('value only', () => {
    it('should return an element by id when value only provided in query', () => {
      document.body.innerHTML = `<div id='one'></div><div id='two'></div>`;

      expect(getElementFromQuery({
        tag: 'div',
        value: 'one',
      })
      ).toBeDefined();
    });

    it('should return an element by id when value only provided in query', () => {
      document.body.innerHTML = `<div id='one'></div><div name='two'></div>`;

      expect(getElementFromQuery({
        tag: 'div',
        value: 'two',
      })
      ).toBeDefined();
    });

    it('should error when no tag, name or value are provided in the query', () => {
      document.body.innerHTML = `<div id='one'></div>`;

      expect(() => {
        getElementFromQuery({
        })
      }).toThrowError('Query requires at least one of tag, name or value.');
    });

    it(`should error when value only not found using id then name`, () => {
      document.body.innerHTML = `<form id='user'><input id='one' /><input name='two' /></form>`;
      expect(() => { getElementFromQuery({ 'value': 'three' }); })
        .toThrowError("No HTMLElement found. Query was {'value':'three'}.")
    });

  });

});
