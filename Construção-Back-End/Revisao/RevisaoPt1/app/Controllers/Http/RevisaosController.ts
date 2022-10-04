// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RevisaosController {

    ex1({ request }) {

        const dados = request.body()

        const SalaraioBruto = dados.salario

        let SalarioLiquido = 0

        if (SalaraioBruto <= 2000) {
            SalarioLiquido = SalaraioBruto * 1.5
        } else {
            SalarioLiquido = SalaraioBruto * 1.3
        }

        return SalarioLiquido
    }

    ex2({ request }) {

        const dados = request.all()

        const n1 = dados.n1
        const n2 = dados.n2
        const n3 = dados.n3

        let maior

        if (n1 > n2 && n1 > n3) {
            maior = "n1"
        } else if (n2 > n1 && n2 > n3) {
            maior = "n2"
        } else if (n3 > n1 && n3 > n2) {
            maior = "n3"
        }

        return (`${maior} é o número maior`)
    }

    ex3({ request }) {

        const dados = request.all()

        const QuantidadeChopp = dados.QuantidadeChopp * 4.80
        const pizzamistagrande = 17.00
        const coberturas = dados.coberturas
        const tipo = coberturas * 1.50
        const turma = dados.Turma

        const calculoValor = (turma + QuantidadeChopp) + (tipo + pizzamistagrande)
        const calculoGarcon = calculoValor * 0.1

        return (`O garçon receberá R$: ${calculoGarcon} e cada um terá que pagar o valor de R$: ${(calculoValor + calculoGarcon) / turma}`)
    }

    ex4({ request }) {

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
        } else if (salarioBruto <= 5000) {
            imposto = 10 / 100 * salarioBruto
        } else {
            imposto = 0.2 * salarioBruto
        }

        const SalarioLiquido = salarioBruto - imposto

        const gratificacao = SalarioLiquido <= 3500 ? 1000 : 500

        const salarioaReceber = SalarioLiquido + gratificacao

        return { salarioaReceber }
    }

    ex5({ request }) {

        const Matricula = request.input('Matricula')

        const n1 = request.input('Nota1')
        const n2 = request.input('Nota2')
        const n3 = request.input('Nota3')
        const ME = request.input('ME')

        let Mensagen = "erro"
        let Conceito = "erro"

        if (n1 > 10 || n2 > 10 || n3 > 10 || ME > 10) {
            return { Mensagen, Conceito }
        } else {

            const MA = (n1 + n2 * 2 + n3 * 3 + ME) / 7

            if (MA < 4) {
                Mensagen = "Reprovado"
                Conceito = "E"
            } else if (MA >= 4 && MA < 6) {
                Mensagen = "Reprovado"
                Conceito = "D"
            } else if (MA >= 6 && MA < 7.5) {
                Mensagen = "Aprovado"
                Conceito = "C"
            } else if (MA >= 7.5 && MA < 9) {
                Mensagen = "Aprovado"
                Conceito = "B"
            } else if (MA >= 9) {
                Mensagen = "Aprovado"
                Conceito = "A"
            }

            return { Matricula, n1, n2, n3, ME, MA, Mensagen, Conceito }
        }
    }

    ex6({ request }) {

        const dados = request.all()

        const altura = dados.altura

        const Homen = (72.7 * altura) - 58
        const Mulher = (62.1 * altura) - 44.7

        return (`a altura do homen é ${Homen} e a altura da Mulher e ${Mulher}`)
    }

    ex7({ request }) {

        const dados = request.all()

        const n1 = dados.n1
        const n2 = dados.n2
        const n3 = dados.n3

        let primeiro

        if (n1 > n2 && n1 > n3) {
            primeiro = n1
        } else if (n2 > n1 && n2 > n3) {
            primeiro = n2
        } else if (n3 > n1 && n3 > n2) {
            primeiro = n3
        }

        let segundo

        if (primeiro == n1) {
            if (n2 > n3) {
                segundo = n2
            } else {
                segundo = n3
            }
        } else if (primeiro == n2) {
            if (n1 > n3) {
                segundo = n1
            } else {
                segundo = n3
            }
        } else if (primeiro == n3) {
            if (n1 > n2) {
                segundo = n1
            } else {
                segundo = n2
            }
        }

        const soma = primeiro + segundo

        return { primeiro, segundo, soma }

    }

    ex8({ request }) {

        const dados = request.all()

        const Codigo = dados.codigo
        const salarioAtual = dados.salarioAtual

        const C101 = 0.05
        const C102 = 0.075
        const C103 = 0.1
        const semCodigo = 0.15

        let novoSalario

        if (Codigo == 101 ) {
            novoSalario = salarioAtual * C101
        }else if (Codigo == 102) {
            novoSalario = salarioAtual * C102
        }else if (Codigo == 103) {
            novoSalario = salarioAtual * C103
        }else {
            novoSalario = salarioAtual * semCodigo
        }

        return ( `Este sera seu novo salário ${novoSalario} / Salário antigo ${salarioAtual} / A diferença entre os dois é de ${novoSalario - salarioAtual}` )
    }


}