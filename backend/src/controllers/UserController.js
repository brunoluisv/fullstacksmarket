const connection = require('../database/connection')
const crypto = require('crypto')
module.exports = {
  async list (req, res) {
    const users = await connection('users').select('*')

    return res.json(users)
  },

  async delete (req, res) {
    const { id } = req.params
  
    await connection('users')
      .where('id', id)
      .delete()

    await connection('tasks')
      .where('user_id', id)
      .delete()

    res.status(204).send()
  },

  async create (req, res) {
    const id = crypto.randomBytes(4).toString('HEX')
    const { name } = req.body

    await connection('users').insert({
      id,
      name
    })

    return res.json({ id })
  }
}