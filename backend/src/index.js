const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

// Determinar quem poderá acessar a api (frontends), caso vá pra produção
app.use(cors())
// Dizer para o express ir no corpo da requisição e converter para um Objeto Javascript
app.use(express.json())
// Dizer para o express que as rotas estão no arquivo routes.js
app.use(routes);

// Dizer para o express utilizar a porta 3333 para iniciar o servidor
app.listen(3333)