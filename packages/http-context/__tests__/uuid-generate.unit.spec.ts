
import { validate } from 'uuid';
import uuidGenerate from '../src/uuid-generate';

describe('wp-context uuid', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should generate a uuid', () => {
    const revokeObjectURLMocked = jest.fn();
    window.URL.revokeObjectURL = revokeObjectURLMocked;
    const uuid = uuidGenerate();
    expect(validate(uuid)).toEqual(true);
    expect(revokeObjectURLMocked).toBeCalled()
  });
});
