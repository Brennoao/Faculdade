// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Turma from "App/Models/Turma";
import TurmaValidator from "App/Validators/TurmaValidator";

export default class TurmasController {
    index({request}){
        const {nome, professoreId, semestreId, disciplinaId, salaId, turno} = request.all()
        const turmas = Turma.query().preload('salas').preload('semestres').preload('professores').preload('disciplinas').preload('aulas').preload('alunos')

        if (nome) {
            turmas.where('nome', nome)
        }else if (professoreId) {
            turmas.where('semestreId', semestreId)
        }else if (disciplinaId) {
            turmas.where('disciplinaId', disciplinaId)
        }else if (salaId) {
            turmas.where('salaId', salaId)
        }else if (turno) {
            turmas.where('turno', turno)
        }

        return turmas
    }

    async store({request}){
        const data = await request.validate(TurmaValidator)

        return Turma.create(data)
    }

    show({request}) {
        const id = request.param('id')

        return Turma.find(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const turma = await Turma.findOrFail(id)

        return turma.delete()
    }

    async update({request}) {
        const id = request.param('id')
        const data =request.only(["nome", "professorId", "semestreId", "disciplinaId", "salaId", "turno"])

        const update = await Turma.findOrFail(id)
        update.merge(data).save()

        return update
    }
}
