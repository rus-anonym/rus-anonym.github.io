const path = require("node:path");
const webpack = require(`webpack`);

const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "../src/main.tsx"),
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/env",
                        "@babel/preset-react",
                        "@babel/typescript",
                    ],
                    plugins: [
                        "@babel/proposal-class-properties",
                        "@babel/proposal-object-rest-spread",
                    ],
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s(a|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },

            {
                test: /\.svg$/,
                type: "asset/resource",
                use: ["svgo-loader"],
                generator: {
                    filename: "static/media/[hash][ext][query]",
                },
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: "asset/resource",
                generator: {
                    filename: "static/media/[hash][ext][query]",
                },
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                type: "asset/resource",
                generator: {
                    filename: "static/fonts/[hash][ext][query]",
                },
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
        }),
        new webpack.ProvidePlugin({
            Buffer: ["buffer", "Buffer"],
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
            }),
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            "imagemin-mozjpeg",
                            "imagemin-pngquant",
                            "imagemin-svgo",
                        ],
                    },
                },
            }),
        ],
        mangleExports: "size",
        splitChunks: {
            chunks: "all",
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendors: {
                    name(module) {
                        const package = module.context.match(
                            /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                        )[1];

                        return "vendors/" + package.replace("@", "");
                    },
                    test: /node_modules/,
                    chunks: "all",
                    enforce: true,
                },
            },
        },
    },
    output: {
        filename: (pathData) => {
            if (pathData.chunk.idNameHints.has("vendors")) {
                return "static/js/[name].[chunkhash].js";
            }
            return "[name].[contenthash].js";
        },
        chunkFilename: "static/js/[chunkhash].js",
        path: path.resolve(__dirname, "../dist"),
        clean: true,
    },
};
