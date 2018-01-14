module.exports = {
  use: [
    '@neutrinojs/web',
    [
      '@neutrinojs/jest',
      {
        testURL: "http://localhost/"
      }
    ]
  ]
};
