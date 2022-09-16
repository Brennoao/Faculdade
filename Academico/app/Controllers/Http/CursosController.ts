// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Curso from "App/Models/Curso";

export default class CursosController {

    index(){
        return Curso.all()
    }

    async store({request}){
        const dados = request.only(['nome', 'duracao', 'modalidade'])

        return await Curso.create(dados)
    }
}
