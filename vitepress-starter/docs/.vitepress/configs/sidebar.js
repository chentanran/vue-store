const { getPath } = require('./utils')

module.exports = {
	[getPath('/components/')]: getComponentsSidebar(),
}

function getComponentsSidebar() {
  return [
    {
      text: '组件',
      children: [
        {
          text: 'Button 按钮',
          link: '/components/button'
        },
        {
          text: 'Tabs 标签页',
          link: '/components/tabs'
        },
      ]
    }
  ]
}