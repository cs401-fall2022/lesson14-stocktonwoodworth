import { describe, expect, test } from '@jest/globals';
import { hello, spinClicked } from '../app';
describe('sum module', function () {
    test('returns the string hello', function () {
        expect(hello()).toBe('Hello World');
    });
});
describe('button clicked', function () {
    test('returns true if button has been clicked', function () {
        expect(spinClicked()).toBe(false);
    });
});
//# sourceMappingURL=test.app.js.map