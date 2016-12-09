(function () {
    /**
     * @member stringUtils
     * Contains string util functions 
     */
    var stringUtils = {};

    stringUtils.trimLeft = trimLeft;

    exports.stringUtils = stringUtils;

    /**
     * @function 
     * 
     * Trims input source string from left by character specified
     * @param {string} source input source sting
     * @param trimCHars {string} trim characters. Any of these characters will be removed from left side of input string
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
     * @function containsAny
     * 
     * @param sourceHashTable {object}
     * @param char {string}
     */
    function containsAny(sourceHashTable, char) {
        return !!sourceHashTable[char];
    }

    /**
     * @function string2hashtable
     * 
     * @param source {string}
     */
    function string2hashtable(source) {
        var res = {};
        for (var i = 0; i < source.length; i++) {
            res[source[i]] = true;
        }

        return res;
    }
})();