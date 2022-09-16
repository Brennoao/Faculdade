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
}
