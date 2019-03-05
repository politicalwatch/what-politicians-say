module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Poletika Widget Generator',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
    widget: {
      entry: 'src/widget/main.js',
      template: 'public/index.html',
      filename: 'widget.html',
      title: 'Poletika Widget',
      chunks: ['chunk-vendors', 'chunk-common', 'widget'],
    },
  },
};
