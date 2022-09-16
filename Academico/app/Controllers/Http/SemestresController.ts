// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Semestre from "App/Models/Semestre";

export default class SemestresController {
    index (){
        return Semestre.all()
    }

    async store ({request}){
        const data = request.only(["nome", "dataInicio", "dataFim"])

        return await Semestre.create(data)
    }
}
