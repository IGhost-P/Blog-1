/** @type {import('next').NextConfig} */
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");


module.exports = {
 /**
  * Custom Webpack Config
  * https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
  */
 env: {
    API_ROOT: "mongodb+srv://yeum:0523a0523a@cluster0.l4zp1.mongodb.net/blog?retryWrites=true&w=majority"
 }, 
 webpack(config, options) {
   const { dev, isServer } = options;

   // Do not run type checking twice:
   if (dev && isServer) {
     config.plugins.push(new ForkTsCheckerWebpackPlugin());
   } 
    
  config.module.rules.push({
  test: /\.svg$/,
  use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  // Enable figma's wrong mask-type attribute work
                  removeRasterImages: false,
                  removeStyleElement: false,
                  removeUnknownsAndDefaults: false,
                  // Enable svgr's svg to fill the size
                  removeViewBox: false,
                },
              ],
            },
          },
        },
      ],
    });

   return config;
  },
  
  
  reactStrictMode: true,
};
