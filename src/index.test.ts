import { test } from "ava";
import BigNumber from "bignumber.js";
import { uniq } from "ramda";
import Nonce from "./index";

const nonce = Nonce();

test(`it generates unique, increasing nonces`, t => {
  const nonces = [];
  let prevNonce = "0";
  for (let index = 0; index < 1000; index++) {
    const n = nonce();
    nonces.push(n);
    if (new BigNumber(n).lte(prevNonce)) {
      t.fail(`Generated nonce ${n} smaller than previous nonce ${prevNonce}`);
    }
    prevNonce = n;
  }

  t.is(uniq(nonces).length, nonces.length);
});
