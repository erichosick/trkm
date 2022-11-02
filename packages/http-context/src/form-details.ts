// TODO: Provide debug information in development mode only?

// import { getForm } from '@trkm/html-support-ts';


// export type FormDetailsSignature = () => object;

// /**
//  * Generates a uuid using URL.createObjectURL
//  * @returns A string uuid.
//  */
// const formDetails: FormDetailsSignature = (): object => {
//   const form = getForm();
//   const inputs = form.getElementsByTagName('input');
//   const textAreas = form.getElementsByTagName('textarea');
//   const selects = form.getElementsByTagName('select');

//   const fields = [];
//   for (let input of inputs) {
//     fields.push({
//       id: input.id,
//       name: input.name,
//       value: input.value
//     })
//   }

//   for (let input of textAreas) {
//     fields.push({
//       id: input.id,
//       name: input.name,
//       value: input.value
//     })
//   }

//   for (let input of selects) {
//     fields.push({
//       id: input.id,
//       name: input.name,
//       value: input.value
//     })
//   }

//   return {
//     form: {
//       id: form.id,
//       name: form.name,
//       fields: fields
//     }
//   }
// }

// export default formDetails;