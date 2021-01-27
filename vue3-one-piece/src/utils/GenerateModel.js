import Vue from 'vue'

class GenerateModel {
  constructor (modelNames) {
    this.modelNames = modelNames
    this.resultStock = []
  }

  getCurrentModel () {
    const context = require.context('../views/', true, /model.js$/)
    context.keys().forEach(key => {
      const currentModel = context(key).default
      if (this.modelNames.indexOf(currentModel.namespace) !== -1) {
        this.resultStock.push(currentModel)
      }
    })
  }

  generateModelMixinData () {
    const mixinQueue = []
    if (this.resultStock.length > 0) {
      this.resultStock.forEach(model => {
        const transformMethods = {}
        const transformLoadingEffect = {}
        const { namespace, state = {}, actions = {} } = model
        Object.keys(actions).forEach(fun => {
          transformMethods[`${namespace}__${fun}`] = actions[fun]
          transformLoadingEffect[`${namespace}/${fun}`] = false
        })
        mixinQueue.push({
          data: () => ({
            model: { ...transformLoadingEffect },
            [namespace]: { ...state }
          }),
          methods: {
            ...transformMethods,
            dispatch: this.dispatch
          }
        })
      })
    } else {
      this.warning('没有找到mdoel数据')
    }
    return mixinQueue
  }

  dispatch (modelCursor, payload, bool, that) {
    console.log(that)
    const [namespace, actionName] = modelCursor.split('/')
    return new Promise((resolve, reject) => {
      // loading && uni.showLoading({
      //   title: 'loading'
      // })
      that.$set(this.model, `${namespace}/${actionName}`, true)
      this[`${namespace}__${actionName}`](this[namespace], {
        payload,
        set: that.$set
      }).then(res => resolve(res)).catch(err => reject(err)).finally(() => {
        // loading && uni.hideLoading()
        that.$set(this.model, `${namespace}/${actionName}`, false)
      })
    })
  }

  warning (message) {
    console.warn('model.js: ', message)
  }
}

export function createModel (components, names = []) {
  const createSetup = new GenerateModel(names)
  createSetup.getCurrentModel()
  const transFormModel = createSetup.generateModelMixinData()
  if (components.mixins) {
    const preMixin = components.mixins
    components.mixins = transFormModel.concat(preMixin)
  }
  components.mixins = [...transFormModel]
  console.log(components)
  return components
}
