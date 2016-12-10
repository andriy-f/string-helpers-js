(function () {
    describe('stringUtils tests', function () {
        var stringUtils = require('../string-helpers.js').stringUtils;

        it('Should trim slash from left', function () {
            expect(stringUtils.trimLeft('/some-res/', '/')).toBe('some-res/');
        });

        it('Should trim slashes from left', function () {
            expect(stringUtils.trimLeft('///some-res/', '/')).toBe('some-res/');
        });

        it('Should trim slashes and spaces from left', function () {
            expect(stringUtils.trimLeft(' /some-res/', '/ ')).toBe('some-res/');
        });
    });
})();