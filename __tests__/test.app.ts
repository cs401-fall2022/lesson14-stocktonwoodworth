import {describe, expect, test} from '@jest/globals';
// @ts-ignore
import {hello, spinClicked} from '../app.js';

describe('sum module', () => {
  test('returns the string hello', () => {
    expect(hello()).toBe('Hello World');
  });
});

// test if button hasn't been clicked
describe('button not clicked', () => {
  test('test button not clicked', () => {
    expect(spinClicked()).toBe(false);
  });
});
