/**
 * Trims input source string from left by character specified
 * 
 * @param {string} source input source sting
 * @param {string} trimChars characters. Any of these characters will be removed from left side of input string
 */
export function trimLeft(source: string, trimChars: string): string {
    const trimCharsHashTable = string2hashtable(trimChars);
    let result = source.substring(0);

    while (containsAny(trimCharsHashTable, result[0])) {
        result = result.substring(1);
    }

    return result;
}

/**
 * Trims input source string from right by character specified
 * 
 * @param {string} source input source sting
 * @param {string} trimChars characters. Any of these characters will be removed from right side of input string
 */
export function trimRight(source: string, trimChars: string): string {
    const trimCharsHashTable = string2hashtable(trimChars);
    let result = source.substring(0);

    while (containsAny(trimCharsHashTable, result[result.length - 1])) {
        result = result.slice(0, -1);
    }

    return result;
}

/**
 * @param {object} sourceHashTable
 * @param {string} char
 */
export function containsAny(sourceHashTable: { [key: string]: boolean }, char: string | undefined): boolean {
    if (char === undefined) {
        return false;
    }
    return !!sourceHashTable[char];
}

/**
 * @param {string} source
 */
export function string2hashtable(source: string): { [key: string]: boolean } {
    const res: { [key: string]: boolean } = {};
    for (let i = 0; i < source.length; i++) {
        const char = source[i];
        if (char !== undefined) {
            res[char] = true;
        }
    }

    return res;
}