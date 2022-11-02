import { getForm, getChildElement } from '../src/index';

describe('getChildElement', () => {
  describe('valid scenarios', () => {
    it(`should return an element by tag name of 'id' when only one element
      exits for that id`, () => {
      document.body.innerHTML = `<form id='user'><input id='one' /></form>`;
      const form = getForm();
      expect(getChildElement(form, { 'name': 'id' })).toBeDefined();
    });

    it(`should return an element by tag name of 'name' when only one element
      exits for that name`, () => {
      document.body.innerHTML = `<form id='user'><input name='one' /></form>`;
      const form = getForm();
      expect(getChildElement(form, { 'name': 'name' })).toBeDefined();
    });

    it(`should return an element by tag name of 'name' when only two elements
      exits for that name but we are also filtering by tag`, () => {
      document.body.innerHTML = `<form id='user'><input name='one' /><select name='one'></select></form>`;
      const form = getForm();
      expect(getChildElement(form, { 'tag': 'input', 'name': 'name' })).toBeDefined();
    });

    it(`should return an element by tag name of 'name' when only two elements
      exits for that name but we are also filtering by tag`, () => {
      document.body.innerHTML = `<form id='user'><input name='one' /><select name='two'></select></form>`;
      const form = getForm();
      expect(getChildElement(form, { 'name': 'name', 'value': 'two' })).toBeDefined();
    });

    it(`should return an element by tag name of 'name' when only two elements
      exits for that name but we are also filtering by tag`, () => {
      document.body.innerHTML = `<form id='user'><input name='one' /><input name='two' /></form>`;
      const form = getForm();
      expect(getChildElement(form, { 'tag': 'input', 'name': 'name', 'value': 'two' })).toBeDefined();
    });

    it(`should return an element by value only first using id and then name.
      exits for that name but we are also filtering by tag`, () => {
      document.body.innerHTML = `<form id='user'><input id='one' /><input id='two' /></form>`;
      const form = getForm();
      expect(getChildElement(form, { 'value': 'two' })).toBeDefined();
    });

    it(`should return an element by value only first using id and then name.
      exits for that name but we are also filtering by tag`, () => {
      document.body.innerHTML = `<form id='user'><input id='one' /><input name='two' /></form>`;
      const form = getForm();
      expect(getChildElement(form, { 'value': 'two' })).toBeDefined();
    });



  });

  describe('invalid scenarios', () => {
    it(`should return an error when no HTMLElementQuery is provided`, () => {
      document.body.innerHTML = `<form></form>`;
      const form = getForm();
      expect(() => getChildElement(form, {}))
        .toThrowError('HtmlElementQuery requires a query value and/or query name.');
    });

    it(`should return an error when no fields are on the form with no id or name`, () => {
      document.body.innerHTML = `<form></form>`;
      const form = getForm();
      expect(() => getChildElement(form, { 'name': 'id' }))
        .toThrowError("No HTMLElement found on form '(no id or name)'. Query was {'name':'id'}.");
    });

    it(`should return an error when no fields are on the form with an id and name: choosing id over name for errors.`, () => {
      document.body.innerHTML = `<form id='newUser' name='notUsed'></form>`;
      const form = getForm();
      expect(() => getChildElement(form, { 'name': 'id' }))
        .toThrowError("No HTMLElement found on form 'newUser'. Query was {'name':'id'}.");
    });

    it(`should return an error when no fields are on the form with a name`, () => {
      document.body.innerHTML = `<form name='isUsed'></form>`;
      const form = getForm();
      expect(() => getChildElement(form, { 'name': 'id' }))
        .toThrowError("No HTMLElement found on form 'isUsed'. Query was {'name':'id'}.");
    });

    it(`should return an error when more than one field is returned from a form`, () => {
      document.body.innerHTML = `<form id='duplicates'><input name='twoNames'/><input name='twoNames' /></form>`;
      const form = getForm();
      expect(() => getChildElement(form, { 'name': 'name' }))
        .toThrowError("More than one HTMLElement found on form 'duplicates'. Query was {'name':'name'}.");
    });

    it(`should return an error when more no field is returned from a form`, () => {
      document.body.innerHTML = `<form id='duplicates'><input id='twoNames'/></form>`;
      const form = getForm();
      expect(() => getChildElement(form, { 'name': 'id', 'value': 'notTwoNames' }))
        .toThrowError("No HTMLElement found on form 'duplicates'. Query was {'name':'id','value':'notTwoNames'}.");
    });

    it(`should error when an Element is returned and not an HTMLelement.`, () => {
      document.body.innerHTML = `<form id='user'><svg class='one'></svg></form>`;
      const form = getForm();
      expect(() => { getChildElement(form, { 'tag': 'svg', 'name': 'class', 'value': 'one' }); })
        .toThrowError("Element, instead of HTMLElement, found. Query was {'tag':'svg','name':'class','value':'one'}.")
    });

  });


});
