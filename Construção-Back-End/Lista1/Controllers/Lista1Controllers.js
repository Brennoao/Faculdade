const ex1 = (req, res) => {
    const {n1, n2, n3, n4} = req.body

    const soma = n1*1 + n2*1 + n3*1 + n4*1

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
}

const ex2 = (req, res) => {
        // res.json(req.body)
        const {Eleitores, Brancos, Nulos, Validos} = req.body

        const percentualBracos = Brancos * 100 / Eleitores
        const percentualNulos = Nulos * 100 / Eleitores
        const percentualValidos = Validos * 100 / Eleitores
    
        const Soma = Brancos*1 + Nulos*1 + Validos*1
    
        if (Soma > Eleitores) {
            res.status(400).json({Mensagem: 'Quantidade Inválida'})
        } 
    
        res.json({percentualBracos, percentualNulos, percentualValidos})    
}

const ex3 = (req, res) => {
    const salarioFuncionario = req.body.salarioFuncionario*1
    const reajuste = Number(req.body.reajuste)
    const Nreajuste = reajuste/100 * salarioFuncionario

    const NovoS = salarioFuncionario + Nreajuste

    res.json(NovoS)
}

const ex4 = (req, res) => {
    const Custo = req.body.Custo*1
    const Inposto = 0.45
    const Distribuidor = 0.28

    const SomaF = (Inposto * Custo) + (Distribuidor * Custo) + Custo

    res.json(`Valor do Carro: ${SomaF}`)
}

const ex5 = (req, res) => {
    const Custo = req.body.Custo*1
    const Inposto = req.body.Inposto*1
    const Distribuidor = req.body.Distribuidor*1

    const SomaF = (Inposto * Custo) + (Distribuidor * Custo) + Custo

    res.json(`Valor do Carro: ${SomaF}`)
}

const ex6 = (req, res) => {
    const {qtdCarrosVendidos, valorVendas, salarioFixo, valorPorCarro} = req.body

    const comissaoFixa = qtdCarrosVendidos * valorPorCarro
    const comissaoVenda = valorVendas * 0.05

    const salorioTotal = salarioFixo*1 + comissaoFixa + comissaoVenda
    res.json({salorioTotal})
}

const ex7 = (req, res) => {
    const {N1, N2} = req.body

    const Soma1 = ((N1*4) + (N2*6)) / (4+6)

    res.json(Soma1)
}

const ex8 = (req, res) => {
    const Raio = req.body.Raio*1
    const Altura = req.body.Altura*1
    const pi = 3.14

    const Multiplicacao = pi*Raio*Raio*Altura

    res.json(`Resposta: V=${Multiplicacao}`)
}

const ex9 = (req, res) => {
    const {P1, P2} = req.body

    const soma = P1*1 + P2*1
    const ResultadoFinal = soma * P1

    res.json(ResultadoFinal)
}

module.exports = {ex1, ex2, ex3, ex4, ex5, ex6, ex7, ex8, ex9}