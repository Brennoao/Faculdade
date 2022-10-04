// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Sala from "App/Models/Sala";

export default class SalasController {
    index (){
        return Sala.all()
    }

    async store ({request}){
        const data = request.only(["nome", "capacidade", "tipo"])
        
        return await Sala.create(data)
    }

    show({request}) {
        const id = request.param('id')

        return Sala.find(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const sala = await Sala.findOrFail(id)
        
        return sala.delete()
    }

    update(id) {
        
    }
}
