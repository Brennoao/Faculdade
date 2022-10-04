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

    show({request}) {
        const id = request.param('id')

        return Aula.find(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const aula = await Aula.findOrFail(id)

        return aula.delete()
    }

    update(id) {
        
    }
}
