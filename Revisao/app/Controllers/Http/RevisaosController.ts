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

}
