import { defaultValues } from "./default-values.mjs";
import { getObjectKeyIDFromScriptArguments } from "./get-object-key-id-from-script-arguments.mjs";
import { rawScriptArguments } from "./raw-script-arguments.mjs";

export function getArgValue(argument) {
    let valueOfArgument, returnValue;
    const defaultObj = defaultValues[argument];
    const keyID = getObjectKeyIDFromScriptArguments(
        defaultObj.command_line_arguments
    );

    if (keyID) {
        valueOfArgument = rawScriptArguments[parseInt(keyID) + 1];
    }

    if (valueOfArgument) {
        switch (defaultObj.command_line_type) {
            case "string":
                returnValue = `${valueOfArgument}`;
                break;
            case "int":
                returnValue = parseInt(valueOfArgument);
                break;
            case "float":
                returnValue = parseFloat(valueOfArgument);
                break;
            case "array":
                returnValue = valueOfArgument.split(
                    defaultObj.command_line_array_splitter
                );
                break;
            default:
                returnValue = valueOfArgument;
        }
    }
    else {returnValue = defaultObj.value;}
    return returnValue;
}