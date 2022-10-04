// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ExerciciosController {
    ex1({request, response}){
        const dados = request.only(['tipoPessoa', 'cpf', 'cnpj', 'nome', 'sexo', 'cargo', 'salario'])
        const tipoPessoa = dados.tipoPessoa /*PJ ou PF*/
        const cpf = dados.cpf /*number*/
        const cnpj = dados.cnpj /*number*/
        const nome = dados.nome /*string*/
        const sexo = dados.sexo /*M ou F*/
        const cargo = dados.cargo /*Estagiário, Técnico, Gerente, Diretor, Presidente*/ 
        const salario = dados.salario /*number*/

        // quando é uma string deixe "" e quando for number apaga tudo no insomnia

        if(tipoPessoa == 'PF' && cpf == null ){
            const error = {tipo: "error" , codigo: "CPF não informado", tipoPessoa, cpf}
            return  response.status(400).send(error)
        } 
        else if(tipoPessoa == 'PJ' && cnpj == null ){
            const error = {tipo: "error" , codigo: "CNPJ não informado", tipoPessoa, cnpj}
            return  response.status(400).send(error)
        } 
        else if(tipoPessoa == 'PJ' && sexo != '' ){
            const error = {tipo: "error" , codigo: "O campo sexo só e permitido para Pessoa Fisica", tipoPessoa, sexo}
            return  response.status(400).send(error)
        } 
        else if(tipoPessoa == 'PJ' && cargo != '' ){
            const error = {tipo: "error" , codigo: "O campo cargo só é permitido para Pessoa Fisica", tipoPessoa, cargo}
            return  response.status(400).send(error)
        } 
        else if(cpf != null && cnpj != null ){
            const error = {tipo: "error" , codigo: "Favor informar somente uma opção, CPF ou CNPJ, de acordo com o Tipo de Pessoa", cpf, cnpj}
            return  response.status(400).send(error)
        } 
        else {
    
         if(tipoPessoa == "PF"){

            if(sexo == "M"){
                if(cargo == "Estagiário"){
                    let reajuste = salario * 1 + salario
                    let novosalario = {salario, nome, reajuste}
                    return novosalario
                }
                else if(cargo == "Técnico"){
                    let reajuste = salario * 0.6 + salario
                    let novosalario = {salario, nome, reajuste}
                    return novosalario
                }
                else if(cargo == "Gerente"){
                    let reajuste = salario * 0.3 + salario
                    let novosalario = {salario, nome, reajuste}
                    return novosalario
                }
                else if(cargo == "Diretor"){
                    let reajuste = salario * 0.2 + salario
                    let novosalario = {salario, nome, reajuste}
                    return novosalario
                }
                else if(cargo == "Presidente"){
                    let reajuste = salario * 0.1 + salario
                    let novosalario = {salario, nome, reajuste}
                    return novosalario
                }
            }

            else if(sexo == "F"){
                if(cargo == "Estagiário"){
                    let reajuste = salario * 1 + salario
                    let novosalario = {salario, nome, reajuste}
                    return novosalario
                }
                else if(cargo == "Técnico"){
                    let reajuste = salario * 0.7 + salario
                    let novosalario = {salario, nome, reajuste}
                    return novosalario
                }
                else if(cargo == "Gerente"){
                    let reajuste = salario * 0.4 + salario
                    let novosalario = {salario, nome, reajuste}
                    return novosalario
                }
                else if(cargo == "Diretor"){
                    let reajuste = salario * 0.3 + salario
                    let novosalario = {salario, nome, reajuste}
                    return novosalario
                }
                else if(cargo == "Presidente"){
                    let reajuste = salario * 0.2 + salario
                    let novosalario = {salario, nome, reajuste}
                    return novosalario
                }
            }
            
         } else if(tipoPessoa == "PJ"){

                    let reajuste = salario * 0.25 + salario
                    let novosalario = {salario, nome, reajuste}
                    return novosalario

            }

       }

    }     
}
