// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Turma from "App/Models/Turma";

export default class TurmasController {
    index(){
        return Turma.all()
    }

    async store({request}){
        const data = request.only(["nome", "professorId", "semestreId", "disciplinaId", "salaId", "turno"])

        return await Turma.create(data)
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

    update(id) {
        
    }
}
