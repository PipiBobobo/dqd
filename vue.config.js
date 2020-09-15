const px2vw = require('postcss-px-to-viewport')


module.exports = {
    devServer: {
        proxy: {
          '/app': {
            //目标地址
          target: 'https://api.dongqiudi.com/',
          changeOrigin: true
          },
          '/api': {
            //目标地址
            target: 'http://localhost:3333/',
            changeOrigin: true,
            pathRewrite:{
              '^/api': ''
            }
          },
        }
      },

    css: {
        loaderOptions: {
            css: {
                // 这里的选项会传递给 css-loader
            },
            postcss: {
                plugins: [new px2vw({
                    unitToConvert: 'px',
                    viewportWidth: 375,
                    unitPrecision: 5,
                    propList: ['*'],
                    viewportUnit: 'vw',
                    fontViewportUnit: 'vw',
                    selectorBlackList: [],
                    minPixelValue: 1,
                    mediaQuery: false,
                    replace: true,
                    exclude: /node_modules/,
                    include: undefined,
                    landscape: false,
                    landscapeUnit: 'vw',
                    landscapeWidth: 568
                })]
                // 这里的选项会传递给 postcss-loader
            }
        }
    }
}