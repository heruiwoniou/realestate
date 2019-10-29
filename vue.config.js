const remUnit = 273.2;
const remPrecision = 8;
const loaderPath = "px2rem-loader";

function generateLoaders(config, loader) {
  config.module
    .rule(loader)
    .oneOf("vue")
    .use(loaderPath)
    .loader(loaderPath)
    .before("postcss-loader")
    .options({ remUnit, remPrecision })
    .end();
  config.module
    .rule(loader)
    .oneOf("normal")
    .use(loaderPath)
    .loader(loaderPath)
    .before("postcss-loader")
    .options({ remUnit, remPrecision })
    .end();
}
module.exports = {
  chainWebpack: config => generateLoaders(config, "stylus")
};
