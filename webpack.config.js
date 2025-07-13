import { join } from "path";

export const entry = "./src/index.js";
export const mode = "development";
export const output = {
  filename: "./main.js",
};
export const devServer = {
  contentBase: join(__dirname, "dist"),
  compress: true,
  port: 9000,
  watchContentBase: true,
  progress: true,
};
export const module = {
  rules: [
    { test: /\.txt$/, use: "raw-loader" },
    { test: /\.svg$/, use: "svg-inline-loader" },
    { test: /\.css$/, use: ["style-loader", "css-loader"] },
    { test: /\.(js)$/, use: "babel-loader" },
    {
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: "babel-loader",
      },
    },
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: "babel-loader",
      },
    },
    {
      test: /\.css$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: true,
          },
        },
      ],
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: ["file-loader"],
    },
  ],
};
