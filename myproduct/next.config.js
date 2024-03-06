module.exports = {
    basePath: process.env.NODE_ENV === 'production' ? '/myapp' : '',
  }

  const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withVideos = require('next-videos')

module.exports = withPlugins([withImages, withVideos], {
  basePath: process.env.NODE_ENV === 'production' ? '/myapp' : '',

  target: 'serverless',
})