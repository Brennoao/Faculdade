// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Disciplina from "App/Models/Disciplina";
import Professore from "App/Models/Professore";

export default class ProfessoresController {

    index(){

        return Professore.all()

    }

    async store({request}){
        const dados = request.only(['nome', 'cpf', 'matricula', 'salario', 'email', 'telefone', 'cep', 'logradouro', 'complemento', 'numero', 'bairro'])

        return await Professore.create(dados)
    }

    show({request}) {
        const id = request.param('id')
        
        return Disciplina.find(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const professore = await Professore.findOrFail(id)

        return professore.delete()
    }

    update(id) {
        
    }
}
