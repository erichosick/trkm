
/**
 * Types of things that can be returned from a context configuration.
 */
export type ContextConfigResultType = string | number | object | unknown[] | undefined;



/**
 * An interface which defines properties needed to search for a given html
 * element on a web page. Warning! Only one matching html element should be
 *  found. If more than one element is found, an error is thrown.
 * 
 * Searching is done for a (required) element type (form, input, etc.).
 * Querying is then done as follows:
 * 
 * name undefined and value undefined - A search is done using
 * the tag.
 * 
 * name undefined and value defined - Attempts to locate
 * the html element by first using the `id` attribute, then the `name` attribute
 * and finally the `class` attribute.
 * 
 * name and value defined - Attempts to locate the html
 * element by using the name and value. Any custom attribute
 * name, such as data-*, can be used.
 * 
 * In all cases, if no html element is found, an error is thrown.
 */
export interface HtmlElementQuery {

  /** 
   * Defines if a given query must return an HTMLElement (true by
   * default). When true, an error is thrown. When false, an error is not
   * thrown.
   */

  required?: boolean

  /**
   * The expected type of html element we are searching for on the webpage (
   * such as input, form, id, etc.). The type needs to match the value returned
   * from form.nodeName.
   */
  tag?: string

  /**
   * Defines the attribute name used to search for the html element.
   *
   * id: (safest). Uses the `id` attribute of the html element
   *   (document.getElementById). Safest since the id property in html is unique
   *   assuring only one element returns.
   * name: Uses the `name` attribute of the html element
   *   (document.getElementsByName).
   * id_or_name (TODO): Tries to find the element using the id and then the name.
   * class: Uses the `class` attribute of the html element
   *   (document.getElementsByClassName)
   * tag: Uses the 'tag' attribute of the html element
   *   (document.getElementsByTagName)
   */
  name?: string

  /**
   * The expected matching value of the attribute.
   */
  value?: string
}


// -----------------------------------------------------------------------------


/**
 * wp-context-build is setup to pull values from different sources within a
 * webpage such as http parameters, headers, cookies, etc. This interface
 * defines the source of a context (value) and the path within that source.
 * Example: { type: 'param', name: 'utm_medium'} tells wp-context-build to
 * pull the value from a Url Parameter named 'utm_medium'.
 */
export interface ContextSource {

  /** Defines if a given context configuration must return a value (true by
   * default). When true, an error is shown on the console if no value was
   * found. When false, an error is not shown and the value is not required.
   * required is ignored if a default value is provided (see default below)
   * TODO: Provide a callback so a developer can handle the error.
   */

  required?: boolean

  /**
   * context - Default. The source is the context object built using wpContext.
   * uuidV4 - The source is a uuid generated using uuidGenerateV4.
   */
  type?: 'context' | 'uuidV4'

  /**
   * 
   */
  jsonPath?: string
}

// -----------------------------------------------------------------------------

export interface InputDestination {
  /** Defines if both pullFrom and destination are required/not required when
   * these values are undefined.
   */
  required?: boolean


  /**
   * The location within the json blob whose value will be written to the
   * form field. For example 'utm.medium' would result in the value being
   * pulled from { utm: { medium: 'some value' }}.
   */
  pullFrom: ContextGetConfig | string

  /**
   * A query to find the destination HTMLElement with which the value will be
   * written to. When a string is provided, it is assumed that the string is a
   * value and a search for the HTMLElement will be done using the id attribute
   * and then the name attribute. For example, if the destination is 'user_name'
   * then an attempt will be done to find an HTMLElement with id='user_name' and
   * if that isn't found, then try name='user_name'.
   */
  destination: HtmlElementQuery | string
}

/**
 * An interface which defines a query for forms and associated output
 * destinations.
 */
export interface FormDestination {

  /** Used as the default value for all destination
   * properties that have a required property. This value is only used if the
   * required values in a given destination is unknown.
   */

  required?: boolean


  /** Query information required to find a form. When the form element is
   * empty, it is assumed that for a given web page, there is only one form
   * and that form is the one data will be populated with.
   */
  formQuery?: HtmlElementQuery

  /** One or more destinations where data will be written to. */
  destination?: InputDestination | InputDestination[]

}


// -----------------------------------------------------------------------------

/**
 * The intent of the wp-context library is to pull values from different
 * locations in a webpage and place them in a json blob for easier access.
 * The Webpage Context interface defines the location/locations of a given
 * context within a webpage such as URL parameter, header, cookie,
 * local-storage and places that value in a json object we are building.
 */
export type ContextConfig = {

  /** Defines if a given context configuration must return a value (true by
   * default). When true, an error is shown on the console if no value was
   * found. When false, an error is not shown and the value is not required.
   * required is ignored if a default value is provided (see default below)
   * TODO: Provide a callback so a developer can handle the error.
   */

  required?: boolean

  /**
   * The location within the json blob being built where, if the a value is
   * found for the context, that value will be placed. For example 'utm.medium'
   * would result in the value being places in { utm: { medium: 'some value' }}.
   */
  mapTo: string

  /** The, optional, default value is used if no value for a given context is
   * found on the webpage. When a default value is provided, the required
   * option is ignored.
   */
  default?: string | number | unknown[]

  /**
   * An object of OR an array of one or more context sources. The order of the
   *  sources as defined in the json determines the order that wp-context
   * attempts to find a value within the webpage.
   */
  source: ContextSource | ContextSource[]

}

/**
 * Defines one or more Webpage context configs.
 */
export type ContextConfigs = ContextConfig[];

// -----------------------------------------------------------------------------


// * TODO: Provide a callback so a developer can handle the error.


/**
 * Returns a value from a given context.
 */
export type ContextGetConfig = {

  /**
   * (optional) Defines if the value being pulled from a given context is
   *  required. When true, an error is thrown if no value is found. When false,
   * no error is thrown and undefined is returned. Overrides
   * ContextSource.required if it is undefined.
   */

  required?: boolean

  /** (optional) A default value is used if no value for a given context is
   * found on the webpage. When a default value is provided, the required
   * option is ignored.
   */
  default?: ContextConfigResultType

  /**
   * An object of OR an array of one or more context sources. The order of the
   *  sources as defined in the json determines the order that a value is
   * pulled from the context.
   */
  source?: ContextSource | ContextSource[]

}

/**
 * Defines one or more Webpage context configs.
 */
export type ContextGetConfigs = ContextGetConfig[];

