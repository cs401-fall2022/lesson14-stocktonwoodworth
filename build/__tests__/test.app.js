import { describe, expect, test } from '@jest/globals';
import { hello, spinClicked } from '../app';
describe('sum module', function () {
    test('returns the string hello', function () {
        expect(hello()).toBe('Hello World');
    });
});
// test if button hasn't been clicked
describe('button not clicked', function () {
    test('test button not clicked', function () {
        expect(spinClicked()).toBe(false);
    });
});
//# sourceMappingURL=test.app.js.map