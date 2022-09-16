// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aula from "App/Models/Aula";

export default class AulasController {

    index(){
        return Aula.all()
    }

    async store({request}){
        const dados = request.only(['data', 'conteudo', 'turmaId'])
        
        return await Aula.create(dados)
    }
}
