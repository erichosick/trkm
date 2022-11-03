import { ContextGetConfig, FormDestination, HtmlElementQuery, InputDestination } from "@trkm/html-types-ts";
import { getForm, getChildElement } from "@trkm/html-support-ts";
import contextGet from './context-get';

/**
 * Sets the value of the form field found to the value parameter of the
 * function.
 * the 
 * @param form The form that contains the form field.
 * @param elementQuery A query used to find the form field on the form.
 * @param value The value to set if the form field is found.
 */
const destinationSet = (
  form: HTMLFormElement,
  elementQuery: HtmlElementQuery,
  value: string,
) => {
  const element = getChildElement(form, elementQuery);
  if (element !== undefined) {
    element.setAttribute('value', value);
  } // else { do nothing. } 

  // If the child element was not found, then
  // elementQuery.required was set to false allowing an undefined value to
  // return
};

export type FormApplySignature = (
  formDestination: FormDestination,
  context?: object
) => HTMLFormElement;

/**
 * 
 * @param formDestination 
 * @param context 
 * @returns 
 */
const formApply: FormApplySignature = (
  formDestination: FormDestination,
  context?: object
): HTMLFormElement => {
  formDestination.required = formDestination.required === undefined
    ? true : formDestination.required;

  const form = getForm(formDestination.formQuery);

  const formDestinationFields: InputDestination[] =
    Array.isArray(formDestination.destination)
      ? formDestination.destination : formDestination.destination
        ? [formDestination.destination] : [];



  for (const destination of formDestinationFields) {

    // override required of destination only if it is undefined.
    destination.required = destination.required === undefined ?
      formDestination.required : destination.required;

    const pullFrom: ContextGetConfig =
      (typeof destination.pullFrom === 'string') ?
        { source: { jsonPath: destination.pullFrom } }
        : destination.pullFrom;


    pullFrom.required = pullFrom.required === undefined ?
      destination.required : pullFrom.required;
    const value = contextGet(pullFrom, context);
    if (value !== undefined) {
      // in cases where destination is a string, convert the destination to
      // an HTMLElementQuery
      const destQuery: HtmlElementQuery = (typeof destination.destination === 'string')
        ? { value: destination.destination } : destination.destination;
      destQuery.required = destQuery.required === undefined
        ? destination.required : destQuery.required;
      destinationSet(form, destQuery, value as string);
    }
  }
  return form;
};

export default formApply;
