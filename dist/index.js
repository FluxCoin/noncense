"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const padStart = (str, targetLength, padString) => {
    const stringLength = str.length;
    if (stringLength === targetLength) {
        return str;
    }
    const stringDiffLength = targetLength - stringLength;
    let newString = "";
    for (let i = 1; i <= stringDiffLength; i++) {
        newString += padString;
    }
    return newString + str;
};
exports.default = (length) => {
    if (length === undefined || length < 1) {
        length = 15;
    }
    const maxValue = parseInt(padStart("", length, "9"), 10);
    let repeat = 0;
    let last;
    return () => {
        let nonce = Math.floor(Math.random() * maxValue);
        if (nonce === last) {
            repeat++;
        }
        else {
            repeat = 0;
            last = nonce;
        }
        nonce += repeat;
        return padStart(`${nonce}`, length, "0");
    };
};
//# sourceMappingURL=index.js.map