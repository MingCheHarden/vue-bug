const fs = require('fs');
const path = require('path');

function createPages(name) {
  return {
    // page 的入口
    entry: `src/pages/${name}/index`,
    // 模板来源
    template: `src/pages/${name}/index.html`,
    // 在 dist/index.html 的输出
    filename: `${name}.html`
  };
}

function getEntryPages() {
  const result = {};
  try {
    fs.readdirSync('./src/pages')
      .filter(item => item.indexOf('.') !== 0)
      .forEach(item => {
        result[item] = createPages(item);
      });
  } catch (e) {
    console.log(e.message); // eslint-disable-line
  }
  return result;
}

module.exports = {
  productionSourceMap: false,
  publicPath: '',
  assetsDir: './static',
  pages: getEntryPages(),
  devServer: {
    host: 'local.m.immomo.com',
    open: true,
    port: 8080,
    publicPath: '/',
    inline: true,
    allowedHosts: ['local.m.immomo.com'],
    // proxy: {},
    before: app => {}
  },
  configureWebpack: {},
  chainWebpack: config => {},
  crossorigin: 'anonymous'
};
