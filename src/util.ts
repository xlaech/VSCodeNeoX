import * as _ from 'lodash'

/**
 * Sorts the characters of a string
 * @param inString the string to be sorted
 * @returns the sorted String
 */
export function sort(inString: string): string {
    var outList = [];

    for (var cnt of _.range(0, inString.length)) {
        outList.push(inString.charAt(cnt));
    }

    return outList.sort().reduce((x,y) => x + y);
}

export var test = 0;