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
      expect(() => { formApply({}) }).toThrow("No HTMLElement found. Query was {'tag':'form','name':'tag'}.");
    });

  });

  describe('setting input', () => {
    it('should successfully set input using all values', () => {
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
      formApply({ destination: inputDest }, context);
      expect(element.value).toEqual('volvo');

    });

    it('should successfully set input using all values and destination is an array', () => {
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
      formApply({ destination: [inputDest] }, context);
      expect(element.value).toEqual('volvo');

    });

  });
});


