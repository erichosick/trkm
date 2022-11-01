import { getForm } from '../src/index';

describe('getForm', () => {
  describe('form no name provided', () => {
    it(`should should return an element by tag name when only one element
      exits and no parameters provided`, () => {
      document.body.innerHTML = `<form></form>`;

      expect(getForm()).toBeDefined();
    });

    it(`should should return an element by tag name when only one element
      exits and tag`, () => {
      document.body.innerHTML = `<form></form>`;

      expect(getForm({
        tag: 'form'
      })).toBeDefined();
    });

    it(`should should return an element by tag name when only one element
      exits and a name is used`, () => {
      document.body.innerHTML = `<form id='formId'></form>`;

      expect(getForm({
        tag: 'form',
        name: 'id',
      })).toBeDefined();
    });


    it(`should should return an element by tag name when only one element
      exits and a name and attributeVAlue are used`, () => {
      document.body.innerHTML = `<form id='formId'></form>`;

      expect(getForm({
        tag: 'form',
        name: 'id',
        value: 'formId'
      })).toBeDefined();
    });


    it(`should error out when multiple elements are found
      using no parameters`, () => {
      document.body.innerHTML = `<form></form><form></form>`;

      expect(() => {
        getForm()
      }).toThrow('Error: More than one html element of tag \'form\' was found using attribute named \'tag\'.')
    });

    it(`should error out when multiple elements are found
      using tag only`, () => {
      document.body.innerHTML = `<form></form><form></form>`;

      expect(() => {
        getForm({
          tag: 'form'
        })
      }).toThrow('Error: More than one html element of tag \'form\' was found.')
    });

    it(`should error out when multiple elements are found
      using tag and name`, () => {
      document.body.innerHTML = `<form></form><form></form>`;

      expect(() => {
        getForm({
          tag: 'form',
          name: 'name',
        })
      }).toThrow('Error: More than one html element of tag \'form\' was found using attribute named \'name\'.')
    });

    it(`should error out when multiple elements are found
    using tag, name and value`, () => {
      document.body.innerHTML = `<form name='theOneForm'></form><form name='theOneForm'></form>`;

      expect(() => {
        getForm({
          tag: 'form',
          name: 'name',
          value: 'theOneForm'
        })
      }).toThrow('Error: More than one html element of tag \'form\' was found using attribute named \'name\' having value \'theOneForm\'.')
    });

    it(`should error out when element found was not a form`, () => {
      document.body.innerHTML = `<div name='notAForm'></div>`;

      expect(() => {
        getForm({
          tag: 'form',
          name: 'name',
          value: 'notAForm'
        })
      }).toThrow('Error: Expected an html \'form\' tag named \'name\' but found an html element of type \'DIV\'.')
    });

    it(`should error out when element found was not a form`, () => {
      document.body.innerHTML = `<div name='notAForm'></div>`;

      expect(() => {
        getForm({
          tag: 'form',
          name: 'name',
          value: 'notAForm'
        })
      }).toThrow('Error: Expected an html \'form\' tag named \'name\' but found an html element of type \'DIV\'.')
    });

  });

});
