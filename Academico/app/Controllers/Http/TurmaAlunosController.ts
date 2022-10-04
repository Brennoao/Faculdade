// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import TurmaAluno from "App/Models/TurmaAluno";

export default class TurmaAlunosController {
    index (){
        return TurmaAluno.all()
    }

    async store ({request}){
        const data = request.only(["tumasId", "alunosId"])

        return await TurmaAluno.create(data)
    }

    show({request}) {
        const id = request.param('id')

        return TurmaAluno.find(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const turmaAluno = await TurmaAluno.findOrFail(id)

        return turmaAluno.delete()
    }

    update(id) {
        
    }
}
