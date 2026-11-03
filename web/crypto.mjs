import { sha256 } from "@noble/hashes/sha2.js";
import { bytesToHex } from "@noble/hashes/utils.js";

export const randomUUID = () => globalThis.crypto.randomUUID();

export function randomInt(max) {
    if (!Number.isSafeInteger(max) || max < 1 || max > 0x100000000) throw new RangeError("Invalid random bound.");
    const limit = Math.floor(0x100000000 / max) * max;
    const value = new Uint32Array(1);
    do { globalThis.crypto.getRandomValues(value); } while (value[0] >= limit);
    return value[0] % max;
}

export function createHash(algorithm) {
    if (algorithm !== "sha256") throw new Error("Only SHA-256 revisions are supported.");
    let value;
    return {
        update(text) { value = new TextEncoder().encode(text); return this; },
        digest(format) {
            if (format !== "hex" || !value) throw new Error("A UTF-8 input and hex digest are required.");
            return bytesToHex(sha256(value));
        },
    };
}
