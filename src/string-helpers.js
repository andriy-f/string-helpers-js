/**
 * Trims input source string from left by character specified
 * 
 * @param {string} source input source sting
 * @param {string} trimChars characters. Any of these characters will be removed from left side of input string
 */
export function trimLeft(source, trimChars) {
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
export function trimRight(source, trimChars) {
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
export function containsAny(sourceHashTable, char) {
    return !!sourceHashTable[char];
}

/**
 * @param {string} source
 */
export function string2hashtable(source) {
    var res = {};
    for (var i = 0; i < source.length; i++) {
        res[source[i]] = true;
    }

    return res;
}