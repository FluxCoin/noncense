"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    let nonceIncr;
    let last;
    return () => {
        const now = new Date().getTime();
        if (now !== last) {
            nonceIncr = -1;
        }
        last = now;
        nonceIncr++;
        const padding = nonceIncr < 10
            ? "000"
            : nonceIncr < 100 ? "00" : nonceIncr < 1000 ? "0" : "";
        return now + padding + nonceIncr;
    };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map