import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional classes', () => {
        expect(classNames('someClass', {}, ['additionalClass'])).toBe('someClass additionalClass');
    });

    test('with mods and additional classes', () => {
        expect(classNames('someClass', { someMod: false }, ['additionalClass'])).toBe('someClass additionalClass');
    });

    test('with mods', () => {
        expect(classNames('someClass', { someMod: true })).toBe('someClass someMod');
    });

    test('with mods false', () => {
        expect(classNames('someClass', { someMod: false })).toBe('someClass');
    });
});
