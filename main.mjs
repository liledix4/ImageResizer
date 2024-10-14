import { functionOptimizeImages } from 'images-folder-optimizer';
import { getArgObject } from './src/get-arg-object.mjs';
import { rawScriptArguments } from './src/raw-script-arguments.mjs';
import { addDefaultsToObject } from './src/add-defaults-to-object.mjs';

export function resizeImages(obj) {
    obj = addDefaultsToObject(obj);
    functionOptimizeImages({
        stringOriginFolder: obj.source,
        stringDestinationFolder: obj.destination,
        stringFileNameSuffix: obj.suffix,
        arrayOriginFormats: obj.formats_source,
        arrayDestinationFormats: obj.formats_destination,
        objectResizeOptions: {
            height: obj.height,
            width: obj.width,
            fit: obj.fit
        },
        objectJpegOptions: {
            quality: obj.quality,
            chromaSubsampling: obj.chroma_subsampling
        }
    }).then((results) => {
        console.table(results);
    });
}

if (rawScriptArguments[2]) {
    const scriptArguments = getArgObject();
    if (scriptArguments.source && scriptArguments.destination) {
        resizeImages(scriptArguments);
    }
}