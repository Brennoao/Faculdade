// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import TurmaAluno from "App/Models/TurmaAluno";
import TurmaAlunoValidator from "App/Validators/TurmaAlunoValidator";

export default class TurmaAlunosController {
    index ({request}){
        const {tumaId, alunoId} = request.all()
        const turmaAluno = TurmaAluno.query().preload('turmas').preload('alunos')

        if (tumaId) {
            turmaAluno.where('tumaId', tumaId)
        }else if (alunoId) {
            turmaAluno.where('alunoId', alunoId)
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
        const turmaAluno = await TurmaAluno.findOrFail(id)
        const dados = request.only(['turmaId', 'alunoId'])

        turmaAluno.merge(dados)

        return await turmaAluno.save()
    }
}
