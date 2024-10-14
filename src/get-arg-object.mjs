import { defaultValues } from "./default-values.mjs";
import { getArgValue } from "./get-arg-value.mjs";

export function getArgObject() {
    let returnObject = {};
    for (let i = 0; i < Object.keys(defaultValues).length; i++) {
        const key = Object.keys(defaultValues)[i];
        returnObject[key] = getArgValue(key);
    }
    return returnObject;
}