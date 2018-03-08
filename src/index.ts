const padStart = (str: string, targetLength: number, padString: string) => {
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

export default (length: number) => {
    if (length === undefined || length < 1) {
        length = 15;
    }
    const maxValue = parseInt(padStart("", length, "9"), 10);
    let repeat = 0;
    let last: number;
    return () => {
        let nonce = Math.floor(Math.random() * maxValue);
        if (nonce === last) {
            repeat++;
        } else {
            repeat = 0;
            last = nonce;
        }
        nonce += repeat;
        return padStart(`${nonce}`, length, "0");
    };
};
