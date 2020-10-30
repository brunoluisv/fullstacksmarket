/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP
 * 
 * GET: Buscar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros
  * 
  * Query Params: Parâmetros nomeados enviados na rota apos "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

const express = require('express')

// Separar rotas do arquivo principal (index.js)
const routes = express.Router()

// Importação dos Controllers
const UserController = require('./controllers/UserController')
const TaskController = require('./controllers/TaskController')

routes.get('/users', UserController.list)
routes.post('/users', UserController.create)
routes.delete('/users/:id', UserController.delete)

routes.get('/tasks/:id', TaskController.list)
routes.delete('/tasks/:id/:taskId', TaskController.delete)
routes.put('/tasks/:id', TaskController.update)
routes.post('/tasks', TaskController.create)



module.exports = routes