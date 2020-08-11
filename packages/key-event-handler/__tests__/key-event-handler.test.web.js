import { GetAbstractKeyName } from '../src/util';

test('abstract key name of 37 should be equal to "LEFT" for web', () => {
  expect(GetAbstractKeyName(37)).toBe('LEFT');
});
