module.exports = {
  target: "serverless",
  assetPrefix: process.env.NODE_ENV === 'production' ? '/{reponame}' : '',
};
