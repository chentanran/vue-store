const sidebar = require('./configs/sidebar')
const nav = require('./configs/nav')

module.exports = {
  title: 'Hello VitePress1',
  description: 'Just playing around.',
	base: '/',
	themeConfig: {
		nav,
		sidebar,
	},
	markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },

    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },

    config: (md) => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'less'
      })
    }
  }
}