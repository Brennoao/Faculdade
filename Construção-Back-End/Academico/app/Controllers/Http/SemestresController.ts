// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Semestre from "App/Models/Semestre";
import SemestreValidator from "App/Validators/SemestreValidator";

export default class SemestresController {
    index ({request}){
        const {nome, dataInicio, dataFim} = request.all()
        const semestre = Semestre.query().preload('turmas')

        if (nome) {
            semestre.where('nome', nome)
        }else if (dataInicio) {
            semestre.where('dataInicio', dataInicio)
        }else if (dataFim) {
            semestre.where('dataFim', dataFim)
        }

        return semestre
    }

    async store ({request}){
        const data = await request.validate(SemestreValidator)

        return Semestre.create(data)
    }

    show({request}) {
        const id = request.param('id')

        return Semestre.find(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const semestre = await Semestre.findOrFail(id)

        return semestre.delete()
    }

    async update({request}) {
        const id = request.param('id')
        const data = request.only(["nome", "dataInicio", "dataFim"])

        const update = await Semestre.findOrFail(id)
        update.merge(data).save()

        return update
    }
}
