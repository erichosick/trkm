import { HtmlElementQuery } from '@trkm/html-types-ts';

const validateElement = (
  query: HtmlElementQuery,
  result: Element[] | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<Element>,
  formName: string = ''
): HTMLElement => {
  const queryStr = JSON.stringify(query).replace(/"/g, '\'',)
  const formStr = formName === '' ? '' : ` on form '${formName}'`;

  if (result.length > 1) {
    throw Error(`More than one HTMLElement found${formStr}. Query was ${queryStr}.`);
  } else if (result.length === 0) {
    throw Error(`No HTMLElement found${formStr}. Query was ${queryStr}.`);
  }

  if (!(result[0] instanceof HTMLElement)) {
    throw Error(`Element, instead of HTMLElement, found. Query was ${queryStr}.`);
  }

  return result[0];
}

export const getElementFromQuery = (
  query: HtmlElementQuery,
): HTMLElement => {
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

export const getChildElement = (
  form: HTMLFormElement,
  query: HtmlElementQuery
): HTMLElement => {
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
  throw Error(`Expected an html '${finalElement.tag}' tag named '${finalElement.name}' but found an html element of type '${result.nodeName}'.`);
};