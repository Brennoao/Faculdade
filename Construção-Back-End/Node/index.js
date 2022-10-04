const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.send('voce acionou a rota rota /')

})

app.get('/objeto', (req, res) => {
    const carroArray = [
        {marca: 'Vw', modelo: 'Gol', cor: 'Branco', placa: 'jgf 9922', ano: '2020'},
        {marca: 'Vw', modelo: 'Virtus', cor: 'Branco', placa: 'jgf 9922', ano: '2020'},
        {marca: 'fiat', modelo: 'Palio', cor: 'Branco', placa: 'jgf 9922', ano: '2020'}
    ]


    res.json(carroArray)
})

app.post('/soma', (req, res) => {
    const n1 = req.body.n1*1
    const n2 = req.body.n2*1
    const n3 = req.body.n3*1
    const n4 = req.body.n4*1

    const soma = n1 + n2 + n3 + n4

    media = soma/4

    const resultado = { soma: soma, media: media }

    const resposta = {
        soma: soma,
        media: media,
    }

    if (media < 5 ) {
        resposta.resultado = 'Reprovado'
    } else if(media < 7) {
        resposta.resultado = 'Em recuperacao. Ainda ha tempo!'
    } else if(media <= 10) {
        resposta.resultado = 'Aprovado!'
    } else {
        resposta.resultado = 'Não é possivel resultado maior que 10'
    }
    
    res.json(resposta)
})

app.listen(3333)