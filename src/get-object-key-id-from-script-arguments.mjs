import { getKeyFromObjectByValue } from "./get-key-from-object-by-value.mjs";
import { rawScriptArguments } from "./raw-script-arguments.mjs";

export function getObjectKeyIDFromScriptArguments(arg) {
    switch (typeof arg) {
        case "string":
            return getKeyFromObjectByValue(rawScriptArguments, "--" + arg);
        case "object":
            for (let i = 0; i < arg.length; i++) {
                const hyphenArgument = getKeyFromObjectByValue(rawScriptArguments, "--" + arg[i]);
                if (hyphenArgument) {
                    return hyphenArgument;
                }
            }
            break;
    }
}