module.exports = [
  {
    path: 'packages/dist/index.js',
    limit: '100 KB',
  },
  {
    path: 'packages/dist/index.js',
    limit: '30 KB',
    gzip: true,
  },
  {
    path: 'packages/dist/index.css',
    limit: '100 KB',
  },
  {
    path: 'packages/dist/index.css',
    limit: '30 KB',
    gzip: true,
  },
];
