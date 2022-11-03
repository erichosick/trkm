import { FormDestination, HtmlElementQuery } from "@trkm/html-types-ts";
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
  const form = getForm(formDestination.formQuery);

  const formDestinationFields = Array.isArray(formDestination.destination)
    ? formDestination.destination : formDestination.destination
      ? [formDestination.destination] : [];

  for (const destination of formDestinationFields) {
    const value = contextGet(destination.pullFrom, context);
    if (value !== undefined) {
      destinationSet(form, destination.destination, value as string);
    }
  }
  return form;
};

export default formApply;
