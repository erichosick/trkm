import { FormDestination, HtmlElementQuery } from "@trkm/html-types-ts";
import { getForm, getChildElement } from "@trkm/html-support-ts";
import contextGet from './context-get';

export const destinationSet = (
  form: HTMLFormElement,
  elementQuery: HtmlElementQuery,
  value: string,
) => {
  const element = getChildElement(form, elementQuery);
  element.setAttribute('value', value);
};

const formApply = (
  formDestination: FormDestination,
  context?: object
): HTMLFormElement => {
  const form = getForm(formDestination.formQuery);

  const formDestinationFields = Array.isArray(formDestination.destination)
    ? formDestination.destination : formDestination.destination
      ? [formDestination.destination] : [];

  for (const destination of formDestinationFields) {
    const value = contextGet(context, destination.pullFrom);
    destinationSet(form, destination.destination, value as string);
  }
  return form;
};

export default formApply;
