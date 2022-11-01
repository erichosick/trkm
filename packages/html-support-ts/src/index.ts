import { HtmlElementQuery } from '@trkm/html-types-ts';

export const getElementFromQuery = (
  query: HtmlElementQuery,
): HTMLElement => {
  let result;

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
        throw Error(`Unsupported attribute name ${query.name}`);
    }
  } else if (query.value) {
    // TODO: This code behind this else
    // we only know the value. We will try and find the control by
    // first looking for it by id, then name and finally class.
    result = [];
  } else { // name is tag OR undefined. Both case should go here.
    result = document.getElementsByTagName(query.tag);
  }

  if (result.length !== 1) {
    const missingName = query.name
      ? ` using attribute named '${query.name}'` : '';
    const missingValue = query.value
      ? ` having value '${query.value}'` : '';
    const tagValue = `element of tag '${query.tag}' was found`;
    if (result.length > 1) {
      throw Error(`Error: More than one html ${tagValue}${missingName}${missingValue}.`);
    } else if (result.length === 0) {
      throw Error(`Error: No html ${tagValue}${missingName}${missingValue}.`);
    }
  }
  // eslint-disable-next-line prefer-destructuring
  return result[0];
};

export const getFormElement = (
  form: HTMLFormElement,
  query: HtmlElementQuery
): HTMLElement | undefined => {
  if (query.value) {
    let items: HTMLCollectionBase = query.tag ?
      form.getElementsByTagName(query.tag) : form.elements;

    const name = query.name;
    const value = query.value.toLowerCase();

    for (const item of items) {
      // looking for a specific named attribute
      if (name) {
        if (item.getAttribute(name)?.toLowerCase() === value) {
          return item as HTMLElement;
        }
      } else {
        if (item.getAttribute('id')?.toLowerCase() === value ||
          item.getAttribute('name')?.toLowerCase() === value) {
          return item as HTMLElement;
        }
      }
    }
  } // else { throw an error? Don't know yet.}

  return undefined;
};

export const getForm = (
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
  throw Error(`Error: Expected an html '${finalElement.tag}' tag named '${finalElement.name}' but found an html element of type '${result.nodeName}'.`);
};