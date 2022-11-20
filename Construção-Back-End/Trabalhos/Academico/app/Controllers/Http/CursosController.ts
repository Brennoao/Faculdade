// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Curso from "App/Models/Curso";
import CursoValidator from "App/Validators/CursoValidator";

export default class CursosController {

    index({request}){
        const {nome, duracao, modalidade} = request.all()
        const curso = Curso.query().preload('disciplinas')

        if (duracao) {
            curso.where('duracao', duracao)
            
        }else if (nome) {
            curso.where('nome', nome)
            
        }else if (modalidade) {
            curso.where('modalidade', modalidade)
            
        }
        
        return curso
    }

    async store({request}){
        const dados = await request.validate(CursoValidator)

        return Curso.create(dados)
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

    async update({request}) {
        const id = request.param('id')
        const data = request.only(['nome', 'duracao', 'modalidade'])

        const update = await Curso.findOrFail(id)
        update.merge(data).save()

        return update
    }
}
