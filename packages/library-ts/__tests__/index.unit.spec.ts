import library from '../src/index';

// importing index builds globalThis.trkm
import '../src/index';
import { validate } from 'uuid';

describe('http-context uuid', () => {
  const revokeObjectURLMocked = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should expose trkm.uuidGenerate', () => {
    window.URL.revokeObjectURL = revokeObjectURLMocked;
    const uuid = library.uuidGenerateV4();
    expect(validate(uuid)).toEqual(true);
    expect(revokeObjectURLMocked).toBeCalled()
  });
});
