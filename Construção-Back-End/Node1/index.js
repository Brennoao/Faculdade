const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.send('chamou a rota / depos de atualizar o servidor')
})

app.get('/soma', (req, res) => {
    const n1 = '1'
    const n2 = '2'

    console.log(n1 + n2)
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})