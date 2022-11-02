// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Funcionario from "App/Models/Funcionario";
import FuncionarioValidator from "App/Validators/FuncionarioValidator";

export default class FuncionariosController {
    index() {
        const funcionarios = Funcionario.query().select(['id', 'nome', 'cpf', 'registroGeral', 'email', 'cargo', 'senha', 'restauranteIdrestaurante'])
        
        return funcionarios
    }

    async store({request}) {
        const data = await request.validate(FuncionarioValidator)

        return Funcionario.create(data)
    }

    async destroy({request}) {
        const id = request.param('id')
        const funcionarios = await Funcionario.findOrFail(id)

        return funcionarios.delete()
    }

    async update({request}) {
        const id = request.param('id')
        const data = request.only([ 'nome', 'cpf', 'registroGeral', 'email', 'cargo', 'senha', 'restauranteIdrestaurante'])

        const update = await Funcionario.findOrFail(id)
        update.merge(data).save()

        return update
    }
}
