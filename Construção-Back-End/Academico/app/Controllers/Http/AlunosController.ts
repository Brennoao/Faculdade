// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aluno from "App/Models/Aluno";

export default class AlunosController {
    index (){
        return Aluno.all()
    }

    async store ({request}) {
        const data = request.only(["nome", "cpf", "matricula", "email", "cep", "logradouro", "complemento", "numero", "bairro"])

        return await Aluno.create(data)
    }

    show({request}) {
        const id = request.param('id')

        return Aluno.find(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const aluno = await Aluno.findOrFail(id)

        return aluno.delete()
    }

    update(id) {

    }
}
