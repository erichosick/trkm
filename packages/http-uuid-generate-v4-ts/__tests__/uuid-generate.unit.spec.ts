import { validate } from 'uuid';
import uuidGenerateV4 from '../src/index';

describe('wp-context uuid', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should generate a uuid', () => {
    const revokeObjectURLMocked = jest.fn();
    window.URL.revokeObjectURL = revokeObjectURLMocked;
    const uuid = uuidGenerateV4();
    expect(validate(uuid)).toEqual(true);
    expect(revokeObjectURLMocked).toBeCalled()
  });
});
