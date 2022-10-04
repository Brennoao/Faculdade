// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Disciplina from "App/Models/Disciplina";

export default class DisciplinasController {
    index (){
        return Disciplina.all()
    }

    async store ({request}) {
        const data = request.only(["nome", "cursoId"])

        return await Disciplina.create(data)
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

    update(id) {
        
    }
}
