"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const bignumber_js_1 = require("bignumber.js");
const ramda_1 = require("ramda");
const index_1 = require("./index");
const nonce = index_1.default();
ava_1.test(`it generates unique, increasing nonces`, t => {
    const nonces = [];
    let prevNonce = "0";
    for (let index = 0; index < 1000; index++) {
        const n = nonce();
        nonces.push(n);
        if (new bignumber_js_1.default(n).lte(prevNonce)) {
            t.fail(`Generated nonce ${n} smaller than previous nonce ${prevNonce}`);
        }
        prevNonce = n;
    }
    t.is(ramda_1.uniq(nonces).length, nonces.length);
});
//# sourceMappingURL=index.test.js.map