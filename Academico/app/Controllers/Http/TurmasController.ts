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
}
