// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import TurmaAluno from "App/Models/TurmaAluno";

export default class TurmaAlunosController {
    index (){
        return TurmaAluno.all()
    }

    async store ({request}){
        const data = request.only(["tumasId", "alunosId"])

        return await TurmaAluno.create(data)
    }
}
