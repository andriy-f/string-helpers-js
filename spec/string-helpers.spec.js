import { trimLeft, trimRight } from '../src/string-helpers.js';

describe('stringUtils tests', function () {

    describe('trimLeft tests', function () {
        it('Should trim slash from left', function () {
            expect(trimLeft('/some-res/', '/')).toBe('some-res/');
        });

        it('Should trim slashes from left', function () {
            expect(trimLeft('///some-res/', '/')).toBe('some-res/');
        });

        it('Should trim slashe and space from left', function () {
            expect(trimLeft(' /some-res/', '/ ')).toBe('some-res/');
        });
    });


    describe('trimRight tests', function () {
        it('Should trim slash from right', function () {
            expect(trimRight('http://example.com/', '/')).toBe('http://example.com');
        });

        it('Should trim slashes from right', function () {
            expect(trimRight('http://example.com//', '/')).toBe('http://example.com');
        });

        it('Should trim slashe and space from right', function () {
            expect(trimRight('http://example.com/ ', ' /')).toBe('http://example.com');
        });
    });
});