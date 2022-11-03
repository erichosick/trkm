import { HtmlElementQuery } from '@trkm/html-types-ts';

export type ValidateElementSignature = (
  query: HtmlElementQuery,
  result: Element[] | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<Element>,
  formName?: string
) => HTMLElement | undefined;

/**
 * Validates the result of searching for an element on a webpage or form. Throws
 * an error if no element was found or the element returned was not an
 * HTMLElement.
 * @param query The query used to locate the element.
 * @param result The result of running the query.
 * @param formName In cases where the query was ran against a form, the name of
 * the form.
 * @returns The validated element: pulling it from the array.
 */
const validateElement: ValidateElementSignature = (
  query: HtmlElementQuery,
  result: Element[] | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<Element>,
  formName: string = ''
): HTMLElement | undefined => {
  const queryStr = JSON.stringify(query).replace(/"/g, '\'',)
  const formStr = formName === '' ? '' : ` on form '${formName}'`;

  if (result.length > 1) {
    throw Error(`More than one HTMLElement found${formStr}. Query was ${queryStr}.`);
  } else if (result.length === 0) {

    // query.required is true "by default" but an optional property of query.
    // So, we consider both true and undefined as true
    if (query.required === true || query.required === undefined) {
      throw Error(`No HTMLElement found${formStr}. Query was ${queryStr}.`);
    } else {
      return undefined;
    }
  }

  if (!(result[0] instanceof HTMLElement)) {
    throw Error(`Element, instead of HTMLElement, found. Query was ${queryStr}.`);
  }

  return result[0];
}

export type GetElementFromQuerySignature = (
  query: HtmlElementQuery,
) => HTMLElement | undefined;

/**
 * Queries for an element on a webpage.
 * @param query An HtmlElementQuery used to find the element.
 * @returns An HTMLElement if found. Throws an exception if no element was
 * found.
 */
export const getElementFromQuery: GetElementFromQuerySignature = (
  query: HtmlElementQuery,
): HTMLElement | undefined => {
  let result: HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<Element> = [];

  if (query.name && query.value) {
    // we know the name and value. Let's try and find it
    switch (query.name) {
      case 'id':
        const element = document.getElementById(query.value);
        result = element ? [element] : [];
        break;
      case 'name':
        result = document.getElementsByName(query.value);
        break;
      case 'class':
        result = document.getElementsByClassName(query.value);
        break;
      default:
        throw Error(`Unsupported query name '${query.name}'.`);
    }
  } else if (query.value) {
    let element = document.getElementById(query.value);
    if (!element) {
      result = document.getElementsByName(query.value);
    } else {
      result = [element];
    }
  } else { // name is tag OR undefined. In both cases, we should go here.
    if (query.tag) {
      result = document.getElementsByTagName(query.tag);
    } else {
      throw Error('Query requires at least one of tag, name or value.');
    }
  }

  return validateElement(query, result);
};

export type GetChildElementSignature = (
  form: HTMLFormElement,
  query: HtmlElementQuery
) => HTMLElement | undefined;

/**
 * Finds a child element on a form using an HtmlElementQuery.
 * @param form An html form element.
 * @param query An HtmlElementQuery.
 * @returns The form element if found. Errors if no element is found.
 */
export const getChildElement: GetChildElementSignature = (
  form: HTMLFormElement,
  query: HtmlElementQuery
): HTMLElement | undefined => {
  // user must provide at the very least a name or value
  if (query.value === undefined && query.name === undefined) {
    throw Error(`HtmlElementQuery requires a query value and/or query name.`);
  }
  const formName = form.id ? form.id : form.name ? form.name : '(no id or name)';

  let result: Element[] = [];

  let items: HTMLCollectionBase = query.tag ?
    form.getElementsByTagName(query.tag) : form.elements;

  const name = query.name;
  const value = query.value?.toLowerCase();

  for (const item of items) {
    if (name !== undefined && value !== undefined) {
      // searching by name and value
      if (item.getAttribute(name)?.toLowerCase() === value) {
        result.push(item);
      }
    } else if (name !== undefined) {
      // searching for just the existence of an element with a name
      if (item.hasAttribute(name)) {
        result.push(item);
      }
    } else {
      // looking for a value within the name or id attribute
      if (item.getAttribute('id')?.toLowerCase() === value ||
        item.getAttribute('name')?.toLowerCase() === value) {
        result.push(item);
      }
    }
  }

  return validateElement(query, result, formName);
};

export type GetFormSignature = (query?: HtmlElementQuery) => HTMLFormElement;

/**
 * Returns a form from the webpage using an HtmlElementQuery. An error is thrown
 * if multiple form are found that match the HtmlElementQuery. If there is only
 * one form on the page, calling getForm with no parameters will find the one
 * form on the page.
 * @param query (HtmlElementQuery): An HtmlElementQuery.
 * @returns An HTMLFormElement unless the form was not found. Throws an error
 * if the form is not found.
 */
export const getForm: GetFormSignature = (
  query?: HtmlElementQuery
): HTMLFormElement => {
  const finalElement = query ? query : {
    tag: 'form',
    name: 'tag',
  } as HtmlElementQuery;

  const result = getElementFromQuery(finalElement);
  if (result instanceof HTMLFormElement) {
    return result;
  }
  throw Error(`Expected an html '${finalElement.tag}' tag named '${finalElement.name}' but found an html element of type '${result ? result.nodeName : 'undefined'}'.`);
};