// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import TurmaAluno from "App/Models/TurmaAluno";
import TurmaAlunoValidator from "App/Validators/TurmaAlunoValidator";

export default class TurmaAlunosController {
    index ({request}){
        const {tumasId, alunosId} = request.all()
        const turmaAluno = TurmaAluno.query().select(["tumasId", "alunosId"])

        if (tumasId) {
            turmaAluno.where('tumasId', tumasId)
        }else if (alunosId) {
            turmaAluno.where('alunosId', alunosId)
        }

        return turmaAluno
    }

    async store ({request}){
        const data = await request.validate(TurmaAlunoValidator)

        return TurmaAluno.create(data)
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

    async update({request}) {
        const id = request.param('id')
        const data = request.only(["tumasId", "alunosId"])

        const update = await TurmaAluno.findOrFail(id)
        update.merge(data).save()

        return update
    }
}
