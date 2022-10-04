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

    show({request}) {
        const id = request.param('id')

        return Curso.find(id)

    }

    async destroy({request}) {
        const id = request.param('id')
        const curso = await Curso.findOrFail(id)

        return curso.delete()
    }

    update(id) {

    }
}
