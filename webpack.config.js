const babelConfig = Object.assign({}, pkg.babel, {
    babelrc: false,
    cacheDirectory: useHMR,
    presets: pkg.babel.presets.map((x) => x === 'latest' ? ['latest', { es2015: { modules: false } }] : x),
  });
  
  babelConfig.presets.push({
    plugins: [
      path.resolve(__dirname, 'babelRelayPlugin.js'),
    ],
  });   