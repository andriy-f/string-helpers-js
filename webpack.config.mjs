import path from "path";

export default {
    mode: "production",
    entry: "./src/string-helpers.ts",
    output: {
        path: path.resolve(import.meta.dirname, "dist/umd"),
        filename: "string-helpers.js",
        library: "stringHelpers", // exposed as window.stringHelpers in browser
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                    options: {
                        configFile: "tsconfig.umd2.json"
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    }
};