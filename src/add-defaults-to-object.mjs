import { defaultValues } from "./default-values.mjs";

export function addDefaultsToObject(obj) {
    let returnObject = {};
    for (let i = 0; i < Object.keys(defaultValues).length; i++) {
        const key = Object.keys(defaultValues)[i];
        if (obj[key]) {returnObject[key] = obj[key];}
        else {returnObject[key] = defaultValues[key].value;}
    }
    return returnObject;
}