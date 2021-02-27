import { setToken, getToken } from '@/utils/storage'
const state = {
  tokenIofo: getToken() || {}
}
const mutations = {
  setTokenInfo (state, newTokenInfo) {
    console.log('55555555555555')
    state.tokenIofo = newTokenInfo
    setToken(newTokenInfo)
  }
}
const actions = {}
const getters = {}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
