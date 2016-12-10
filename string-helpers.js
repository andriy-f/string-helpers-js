(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.stringUtils = factory();
  }
}(this, function () {
    /**
     *  Contains string utility functions 
     */
    var stringUtils = {
        trimLeft: trimLeft,
        trimRight: trimRight
    };

    return {
        stringUtils: stringUtils
    };

    /**
     * Trims input source string from left by character specified
     * 
     * @param {string} source input source sting
     * @param {string} trimChars characters. Any of these characters will be removed from left side of input string
     */
    function trimLeft(source, trimChars) {
        var trimCharsHashTable = string2hashtable(trimChars),
            result = source.substr(0);

        while (containsAny(trimCharsHashTable, result[0])) {
            result = result.substr(1);
        }

        return result;
    }

    /**
     * Trims input source string from right by character specified
     * 
     * @param {string} source input source sting
     * @param {string} trimChars characters. Any of these characters will be removed from right side of input string
     */
    function trimRight(source, trimChars) {
        var trimCharsHashTable = string2hashtable(trimChars),
            result = source.substr(0);

        while (containsAny(trimCharsHashTable, result[result.length - 1])) {
            result = result.slice(0, -1);
        }

        return result;
    }

    /**
     * @param {object} sourceHashTable
     * @param {string} char
     */
    function containsAny(sourceHashTable, char) {
        return !!sourceHashTable[char];
    }

    /**
     * @param {string} source
     */
    function string2hashtable(source) {
        var res = {};
        for (var i = 0; i < source.length; i++) {
            res[source[i]] = true;
        }

        return res;
    }
}));