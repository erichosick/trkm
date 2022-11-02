// // TODO: How do we expose this?

// import { wpContext } from '@trkm/http-context-ts';
// import { sessionMerge } from '@trkm/http-session-deepmerge-ts';
// import formApply from '@trkm/html-form-apply-ts';
// import { FormDestination, HtmlElementQuery } from '@trkm/html-types-ts';

// // This is what creating a form query would look like.
// // Really only required if there is more than one form on a webpage.
// const formQuery: HtmlElementQuery = {
//   tag: 'form',
//   name: 'id',
//   value: '{some_id_or_value}'
// };

// // Assumption is that there is only one form per page. If this isn't the case
// // then we need to provide a form query.
// const formDestination: FormDestination = {
//   formQuery,
//   destination: [
//     {
//       pullFrom: {
//         default: 'unknown',
//         source: {
//           type: 'context',
//           jsonPath: 'cookies._ga'
//         }
//       },
//       destination: {
//         name: 'name',
//         value: 'gform_unique_id'
//       }
//     }
//   ]
// };


// export type PirateSkillsSignature = () => void;

// /**
//  * Generates a uuid using URL.createObjectURL
//  * @returns A string uuid.
//  */
// const pirateSkills: PirateSkillsSignature = (): void => {
//   formApply(formDestination, sessionMerge(wpContext()));
// }

// export default pirateSkills;