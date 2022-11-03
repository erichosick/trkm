import globalThis, { library } from '@trkm/library-ts';

// TODO: Provide debug information in development mode only?
// import { getForm } from '@trkm/html-support-ts';
// import formDetails from './form-details';
// import pirateSkills from './pirate-skills';

// NOTE: We define everything as pure typescript (see libraries like
// @trkm/http-cookies-ts) and expose them as an interface using
// webpack to build our final API.

globalThis.trkm = library;

// TODO: Provide debug information in development mode only?
// globalThis.trkmd = {
//   form: getForm,
//   formDetails: formDetails,
//   pirateForm: pirateSkills
// }