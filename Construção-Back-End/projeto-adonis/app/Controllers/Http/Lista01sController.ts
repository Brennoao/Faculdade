// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Lista01sController {

    ex1({request}){

        const dados = request.body()

        const estoqueMedio = (dados.qtdMinima + dados.qtdMaxima) / 2

        // const resultado = { estoqueMedio }
        // return resultado

        return {estoqueMedio}
    }

    ex2({request}){

        const dados = request.body()

        const nFuncionario = dados.nFuncionario

        const salarioB = (dados.hTrabalhadas + dados.vHora) 
        const salarioaleatorio = (salarioB * 0.03) * dados.nFilhos
        // const Total = nFuncionario + salarioB

        return (`${nFuncionario}: ${salarioaleatorio}`)
    }

    ex3({request, response}){

        const dados = request.body()

        if (dados.days < 0){
            const resultado = {type: "ERROR", dados: "Preencido errado"}
            return response.status(400).send(resultado)
        }

        const ageD = (dados.year * 365) + (dados.months * 30) + dados.days 

        const resultado = {
            ageD
        }

        return resultado

    }

    ex4({request}){

        const req = request.body() 
        const dias = parseInt (req.dias)
        const restoAnos = dias % 365 
        const anos = (dias - restoAnos)/365  
        const restoMeses = restoAnos % 30  
        const meses = (restoAnos - restoMeses)/30 
         
        const resultado = { 
            anos : anos,  
            meses: meses,  
            dias : restoMeses 
        } 
        return {resultado} 

    }

    ex5({request}){

        const dados = request.body()

        const somaD = ((dados.nota1*2) + (dados.nota2*3) + (dados.nota3*5)) / (2+3+5)

        return (somaD)
    }

    ex6({request}){

        const req = request.body() 
        const duracao = parseInt (req.duracao)
        const restoSeg = duracao % 3600
        const horas = (duracao - restoSeg)/3600
        const restoMin = restoSeg % 60
        const min = (restoSeg - restoMin)/60
        const seg = restoMin % 60
         
        const resultado = {   
            horas: horas,
            minutos: min,
            segundos: seg
        } 
    return {resultado} 

    }

    ex7({request}){

        const dados = request.body()

        const nomeV = dados.nomeV

        const salarioF = dados.salarioF
        const totalV = dados.totalV
        const percentual = dados.percentual / 100
        const soma = totalV * percentual

        const total = (salarioF + soma)

        return (`${nomeV}: R$: ${total}`)
    }

    ex8({request}){

        const dados = request.body()

        const nomeP = dados.nomeP
        const distance = dados.distance
        const time = dados.time
        
        const velocidadeM = distance / time

        return (`A velocidade média do ${nomeP} foi ${velocidadeM}km/h`)
    }

    ex9({request}){

        const dados = request.body()

        const naoE = 'Empregado não elegível para aumento!'

        const empregadoN = dados.empregadoN
        const salario = dados.salario
        const porcentage = salario * 0.3

        if (salario > 1000) {
            return {naoE}
        } else {
            return (`Empregado ${empregadoN} elegivel para o almento, seu salario será de ${porcentage}`)
            // return ('afyafya'+var+'gagaga')   
        }
    }
}

