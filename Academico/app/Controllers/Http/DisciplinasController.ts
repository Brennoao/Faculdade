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
}
