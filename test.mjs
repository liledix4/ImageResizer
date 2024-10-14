import { resizeImages } from "./main.mjs";

resizeImages({
    height: 400,
    width: 400,
    chroma_subsampling: "4:2:0",
    quality: 38,
    source: "source-images",
    destination: "offline",
    suffix: "_thumb"
});