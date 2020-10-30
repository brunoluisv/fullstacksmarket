import Vue from 'vue'
import Vuex from 'vuex'

import users from './users'
import tasks from './tasks'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      users,
      tasks
    },

    strict: process.env.DEBUGGING
  })

  return Store
}
