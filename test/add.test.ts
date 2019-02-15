import add from '../src/add';

describe('add two number', () => {
  test('positive integer', () => {
    expect(add(3, 5)).toBe(8);
  });
});
