module.exports = {
    publicPath: "/beshambher/",
    outputDir: "docs",
    chainWebpack: config => {
        config.module.rule('pdf')
          .test(/\.pdf$/)
          .use('file-loader').loader('file-loader').options({ name: `[name].[ext]` })
      }
  }