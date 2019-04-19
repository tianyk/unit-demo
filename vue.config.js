const pkg = require('./package.json');

/**
 * 环境变量
 *
 * @returns
 */
function env() {
  return process.env.NODE_ENV || 'development';
}

function isProd() {
  const NODE_ENV = env();
  return NODE_ENV === 'production';
}

module.exports = {
  // 非production包含运行时编译器
  runtimeCompiler: !isProd(),
  css: { extract: false },
  chainWebpack: config => {
    if (!isProd()) {
      config
        .plugin('html')
        .tap(args => {
          const arg = {
            component: pkg.name
          }
          Object.assign(args[0], arg);
          return args;
        })
    }
  },
  configureWebpack: {
    output: {
      libraryTarget: 'umd', // universal module definition
    }
  }
}


