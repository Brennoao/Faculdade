// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Disciplina from "App/Models/Disciplina";
import DisciplinaValidator from "App/Validators/DisciplinaValidator";

export default class DisciplinasController {
    index ({request}){
        const {nome, cursoId} = request.all()
        const disciplina = Disciplina.query().preload("cursos").preload('turmas')

        if (nome) {
            disciplina.where('nome', nome)
        }if (cursoId) {
            disciplina.where('cursoId', cursoId)
        }

        return disciplina
    }

    async store ({request}) {
        const data = await request.validate(DisciplinaValidator)

        return Disciplina.create(data)
    }

    show({request}) {
        const id = request.param('id')

        return Disciplina.find(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const disciplina = await Disciplina.findOrFail(id)

        return disciplina.delete()
    }

    async update({request}) {
        const id = request.param('id')
        const data = request.only(["nome", "cursoId"])

        const update = await Disciplina.findOrFail(id)
        update.merge(data).save()

        return update
    }
}
