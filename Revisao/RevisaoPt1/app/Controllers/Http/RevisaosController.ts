// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RevisaosController {

    ex1({request}){

        const dados = request.body()

        const SalaraioBruto = dados.salario

        let SalarioLiquido = 0

       if (SalaraioBruto <= 2000) {
            SalarioLiquido = SalaraioBruto * 1.5
       }else{
        SalarioLiquido = SalaraioBruto * 1.3
       }


        return SalarioLiquido
    }

    ex2({request}){

        const dados = request.all()

        const n1 = dados.n1
        const n2 = dados.n2
        const n3 = dados.n3

        let maior

        if (n1 > n2 && n1 > n3 ) {
            maior = "n1"
        }else if (n2 > n1 && n2 > n3 ) {
            maior = "n2"
        }else if (n3 > n1 && n3 > n2) {
            maior = "n3"
        }

        return (`${maior} é o número maior`)

    }

    ex3({request}){

        const dados = request.all()

        // const tulipadechopp = 4.80
        const QuantidadeChopp = dados.QuantidadeChopp * 4.80
        const pizzamistagrande = 17.00
        const coberturas = dados.coberturas
        const tipo = coberturas * 1.50
        const turma = dados.Turma

        const calculoValor = (turma + QuantidadeChopp) + ( tipo + pizzamistagrande )
        const calculoGarcon = calculoValor * 0.1

        return (`O garçon receberá R$: ${calculoGarcon} e cada um terá que pagar o valor de R$: ${(calculoValor + calculoGarcon)/turma}`)

    }

    ex4({request}){

        const dados = request.all()

        const salarioMinimo = dados.salarioMinimo
        const horasTrabalhadas = dados.horasTrabalhadas
        const dependentes = dados.dependentes
        const horasExtras = dados.horasExtras

        const valorHora = 0.2 * salarioMinimo
        const salarioMes = horasTrabalhadas * valorHora
        const acrescimoDependente = dependentes * 32
        const valorHoraExtra = horasExtras * (valorHora * 1.5)

        const salarioBruto = salarioMes + acrescimoDependente + valorHoraExtra

        let imposto

        if (salarioBruto < 2000) {
            imposto = 0
        }else if (salarioBruto <= 5000) {
            imposto = 10/100 * salarioBruto
        }else {
            imposto = 0.2 * salarioBruto
        }

        const SalarioLiquido = salarioBruto - imposto

        const gratificacao = SalarioLiquido <= 3500 ? 1000 : 500

        const salarioaReceber = SalarioLiquido + gratificacao

        return {salarioaReceber}

    }

    
    ex7({request}){

        const dados = request.all()

        const n1 = dados.n1
        const n2 = dados.n2
        const n3 = dados.n3

        let maior

        if (n1 > n2 && n1 > n3 ) {
            maior = "n1"
        }else if (n2 > n1 && n2 > n3 ) {
            maior = "n2"
        }else if (n3 > n1 && n3 > n2) {
            maior = "n3"
        }

        return (`${maior} é o número maior`)

    }
}
