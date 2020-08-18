import Vue from 'vue'
import Vuex from 'vuex'
//import Chat from '../Modules/Chat'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer:false
  },
  mutations: {
    setDrawer(state,drawer){
       state.drawer = drawer
       console.log(state.drawer)
    }
  },
  actions: {
  },
  modules: {
    
  }
})
