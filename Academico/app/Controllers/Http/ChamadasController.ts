// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Chamada from "App/Models/Chamada";

export default class ChamadasController {
    index (){
        return Chamada.all()
    }

    async store ({request}){
        const dados = request.only(["aulaId", "alunosId", "presenca"])

        return await Chamada.create(dados)
    }
}
