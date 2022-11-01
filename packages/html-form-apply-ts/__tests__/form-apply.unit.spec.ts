import { InputDestination } from '@trkm/html-types-ts';
import formApply from '../src/index';

describe('formApply', () => {
  describe('should get a form', () => {
    it('should find a form if only one exists on the page', () => {
      document.body.innerHTML = `<form></form>`;

      expect(formApply({})).toBeDefined();
    });

    it('should find a form if only one exists on the page', () => {
      document.body.innerHTML = `<form></form>`;

      expect(formApply({
        formQuery: {
          tag: 'form',
        }
      })).toBeDefined();
    });

    it('should find a form by id if a page has multiple forms', () => {
      document.body.innerHTML = `<form id='first'></form><form id='second'></form>`;

      expect(formApply({
        formQuery: {
          tag: 'form',
          name: 'id',
          value: 'first'
        }
      })).toBeDefined();
    });

    it('should error if a form is not found', () => {
      document.body.innerHTML = '<div></div>';
      expect(() => { formApply({}) }).toThrow('Error: No html element of tag \'form\' was found using attribute named \'tag\'.');
    });

  });

  describe('setting input', () => {
    it.only('should successfully set input using all values', () => {
      const formHtml = '<form><input id="car_type"></input></form>';
      const context = {
        carType: 'volvo'
      };

      const inputDest: InputDestination = {
        pullFrom: {
          source: {
            type: 'context',
            jsonPath: 'carType'
          }
        },
        destination: {
          tag: 'input',
          name: 'id',
          value: 'car_type'
        }
      };

      document.body.innerHTML = formHtml;
      let element = document.getElementById('car_type') as HTMLSelectElement;
      expect(element.value).toEqual('');
      formApply({ formInput: inputDest }, context);
      expect(element.value).toEqual('volvo');

    });
  });
});


