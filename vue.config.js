// const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const pkg = require("./package.json");

/**
 * 环境变量
 *
 * @returns
 */
function env() {
  return process.env.NODE_ENV || "development";
}

function isProd() {
  const NODE_ENV = env();
  return NODE_ENV === "production";
}

module.exports = {
  // publicPath: 'http://cdn.51talk.com/', 
  productionSourceMap: false, 
  // 非production包含运行时编译器
  runtimeCompiler: !isProd(),
  css: { extract: false },
  chainWebpack: config => {
    if (process.argv[2] === "serve") {
      config
        .plugin("html")
        .tap(args => {
          if (!args[0]) args[0] = {};
          const arg = {
            component: pkg.name
          };
          Object.assign(args[0], arg);
          return args;
        });
    }

    config.plugin("define").tap(definitions => {
      const define = {
        COMPONENT_NAME: JSON.stringify(pkg.name)
      };
      Object.assign(definitions[0], define);
      return definitions;
    });
  }
};


