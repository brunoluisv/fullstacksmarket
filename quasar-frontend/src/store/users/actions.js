import Vue from 'vue'

const setUsers = ({ commit }) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get('http://localhost:3333/users')
      .then((res) => {
        commit('SET_USERS', res.data)
        resolve()
      })
      .catch((err) => {
        console.log(err)
      })
  })
}

const deleteUser = ({ commit }, { id }) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.delete('http://localhost:3333/users/' + id)
      .then((res) => {
        if (res.status === 204) {
          resolve()
        }
      })
      .catch((err) => {
        console.log(err)
      })
  })
}

const createUser = ({ commit }, { name }) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.post('http://localhost:3333/users', {
      name: name
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
  setUsers,
  deleteUser,
  createUser
}
