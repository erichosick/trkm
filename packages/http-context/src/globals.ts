import { TrkmLibrary } from '@trkm/library-ts';

// TODO: Provide debug information in development mode only?
// import { GetFormSignature } from '@trkm/html-support-ts';
// import { FormDetailsSignature } from './form-details';
// import { PirateSkillsSignature } from './pirate-skills';

declare module globalThis {
  let trkm: TrkmLibrary

  // TODO: Provide debug information in development mode only?  
  // let trkmd: {
  //   form: GetFormSignature
  //   formDetails: FormDetailsSignature
  //   pirateForm: PirateSkillsSignature,
  // }
};

export default globalThis;
