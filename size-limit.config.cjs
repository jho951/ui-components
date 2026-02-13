module.exports = [
  {
    path: 'packages/dist/index.js',
    limit: '100 KB',
    running: false,
  },
  {
    path: 'packages/dist/index.js',
    limit: '30 KB',
    gzip: true,
    running: false,
  },
  {
    path: 'packages/dist/index.css',
    limit: '100 KB',
    webpack: false,
  },
  {
    path: 'packages/dist/index.css',
    limit: '30 KB',
    gzip: true,
    webpack: false,
  },
];
