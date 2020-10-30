const connection = require('../database/connection')
const md5 = require('md5')

module.exports = {
  async list (req, res) {
    const { id } = req.params

    const tasks = await connection('tasks')
      .where('user_id', id)

    res.json(tasks)
  },

  async delete (req, res) {
    const { id, taskId } = req.params

    await connection('tasks')
      .where('user_id', id)
      .andWhere('id', taskId)
     .delete()

    res.status(204).send()
  },

  async update (req, res) {
    const { id } = req.params
    const { task_id, state } = req.body

    await connection('tasks')
      .where('user_id', id)
      .andWhere('id', task_id)
      .update('state', state)

    res.status(204).send()
  },

  async create (req, res) {
    const data = req.body

    const id = md5(JSON.stringify(data))
    const { descr, state, user_id } = data

    await connection('tasks').insert({
      id,
      descr,
      state,
      user_id
    })

    res.json({ id })
  }
}