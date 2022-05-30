module.exports = ({ config }) => {
    config.resolve.extensions.push('.ts', '.tsx');
    // svg with @svgr
    const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));
    config.module.rules = config.module.rules.map(rule => {
      if (
        String(rule.test) ===
        String(/\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/)
      ) {
        console.log(rule);

        return {
          ...rule,
          test: /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
        }
      }
  
      return rule
    })

    // configure .svg files to be loaded with @svgr/webpack
    config.module.rules.unshift({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    })

    console.log(config.module.rules);
    //
    return config
  }