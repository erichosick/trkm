import { FormDestination, HtmlElementQuery } from "@trkm/html-types-ts";
import { getForm, getFormElement } from "@trkm/html-support-ts";
import contextGet from './context-get';

export const formInputSet = (
  form: HTMLFormElement,
  elementQuery: HtmlElementQuery,
  value: string,
) => {
  const element = getFormElement(form, elementQuery);

  if (element !== undefined) {
    element.setAttribute('value', value);
  } else {
    throw Error(`Fix this error message.`);
  }
};

const formApply = (
  formDestination: FormDestination,
  context?: object
): HTMLFormElement => {
  const form = getForm(formDestination.formQuery);

  const formDestinationFields = Array.isArray(formDestination.formInput)
    ? formDestination.formInput : formDestination.formInput
      ? [formDestination.formInput] : [];

  for (const destination of formDestinationFields) {
    const value = contextGet(context, destination.pullFrom);
    formInputSet(form, destination.destination, value as string);
  }
  return form;
};

export default formApply;
