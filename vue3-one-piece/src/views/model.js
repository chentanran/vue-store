export default {
  namespace: 'test',
  state: {
    move: {},
    a: 1,
    b: 2
  },
  actions: {
    /**
     * 获取当前用户身份信息
     * @param { Object extends VueData } state
     * @param { Object } payload
     * @param { function } set
     */
    async getUser (state, { set }) {
      const data = '123'
      await set(state, 'move', data)
      return state.move
    }
  }
}
