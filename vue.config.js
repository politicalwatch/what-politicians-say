module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Poletika Widget',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
    generator: {
      entry: 'src/generator/main.js',
      template: 'public/index.html',
      filename: 'generator.html',
      title: 'Poletika Widget Generator',
      chunks: ['chunk-vendors', 'chunk-common', 'generator'],
    },
  },
};
