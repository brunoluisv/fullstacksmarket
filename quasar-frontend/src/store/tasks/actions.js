import Vue from 'vue'

const setTasks = ({ commit }, { id }) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get('http://localhost:3333/tasks/' + id)
      .then((res) => {
        commit('SET_TASKS', res.data)
        resolve()
      })
      .catch((err) => {
        console.log(err)
      })
  })
}

const deleteTask = ({ commit }, { taskId, userId }) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.delete('http://localhost:3333/tasks/' + userId + '/' + taskId)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        console.log(err)
      })
  })
}

const createTask = ({ commit }, { descr, state, userId }) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.post('http://localhost:3333/tasks/', {
      descr: descr,
      state: state,
      user_id: userId
    })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        console.log(err)
      })
  })
}

const changeStateTask = ({ commit }, { id, state, userId }) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.put('http://localhost:3333/tasks/' + userId, {
      task_id: id,
      state: state
    })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        console.log(err)
      })
  })
}

export {
  setTasks,
  deleteTask,
  createTask,
  changeStateTask
}
