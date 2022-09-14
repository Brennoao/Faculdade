const express = require('express')
const app = express()

const Lista1Controllers = require('./Controllers/Lista1Controllers')

app.use(express.urlencoded({extended: true}))

// Lista1

app.post('/Notas', Lista1Controllers.ex1)

app.post('/Eleicoes', Lista1Controllers.ex2)

app.post('/Salario', Lista1Controllers.ex3)

app.post('/Carr', Lista1Controllers.ex4)

app.post('/CarrCliente', Lista1Controllers.ex5)

app.post('/Revendedora', Lista1Controllers.ex6)

app.post('/Media', Lista1Controllers.ex7)

app.post('/Volume', Lista1Controllers.ex8)

app.post('/Soma1', Lista1Controllers.ex9)

app.listen(3333)