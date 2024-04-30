const isProd = process.env.NODE_ENV === 'production'

const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
module.exports = withNextra({
  basePath: isProd ? '/blog' : ''
})
