// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aula from "App/Models/Aula";
import AulaValidator from "App/Validators/AulaValidator";

export default class AulasController {

    index({request}){
        const {data, conteudo, turmaId} = request.all()
        const aulas = Aula.query().preload('turmas').preload('chamadas')

        if (data) {
            aulas.where('data', data)
        }else if (conteudo) {
            aulas.where('conteudo', conteudo)
        }else if (turmaId) {
            aulas.where('turmaId', turmaId)
        }

        return aulas
    }

    async store({request}){
        const dados = await request.validate(AulaValidator)
        
        return Aula.create(dados)
    }

    show({request}) {
        const id = request.param('id')

        return Aula.find(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const aula = await Aula.findOrFail(id)

        return aula.delete()
    }

    async update({request}) {
        const id = request.param('id')
        const data = request.only(['data', 'conteudo', 'turmaId'])

        const update = await Aula.findOrFail(id)
        update.merge(data).save()

        return update
    }
}
