export const defaultValues = {
    height: {
        command_line_arguments: ["h", "height"],
        command_line_type: "int"
    },
    width: {
        command_line_arguments: ["w", "width"],
        command_line_type: "int"
    },
    fit: {
        command_line_arguments: ["f", "fit"],
        value: "inside"
    },
    source: {
        command_line_arguments: ["s", "source"]
    },
    destination: {
        command_line_arguments: ["d", "destination"]
    },
    quality: {
        command_line_arguments: ["q", "quality"],
        command_line_type: "int",
        value: 100
    },
    chroma_subsampling: {
        command_line_arguments: ["cs", "chroma", "chroma-subsampling"],
        value: "4:4:4"
    },
    formats_source: {
        command_line_arguments: ["fs", "formats-source"],
        command_line_type: "array",
        command_line_array_splitter: " ",
        value: ["jpg","jpeg","png","webp","avif","tiff","gif"]
    },
    formats_destination: {
        command_line_arguments: ["fd", "formats-destination"],
        command_line_type: "array",
        command_line_array_splitter: " ",
        value: ["jpg"]
    },
    suffix: {
        command_line_arguments: ["x", "suffix"],
        value: ""
    }
};