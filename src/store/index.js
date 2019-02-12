import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import blog from './module/blog'
import app from './module/app'
import robot from './module/robot'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user,
    app,
    blog,
    robot
  }
})
