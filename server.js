const express = require('express')

const tabela1 = require('./tabela1')
const tabela2 = require('./tabela2')

const app = express()
const port = 3000

app.get('/tabela1', tabela1)
app.get('/tabela2', tabela2)

app.listen(port, () => {
    console.log(`servidor rodando na porta: ${port}`)
})

