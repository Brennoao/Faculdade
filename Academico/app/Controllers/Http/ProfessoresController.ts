// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Professore from "App/Models/Professore";

export default class ProfessoresController {

    index(){

        return Professore.all()

    }

    async store({request}){
        const dados = request.only(['nome', 'cpf', 'matricula', 'salario', 'email', 'telefone', 'cep', 'logradouro', 'complemento', 'numero', 'bairro'])

        return await Professore.create(dados)
    }
}
