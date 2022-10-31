// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Sala from "App/Models/Sala";
import SalaValidator from "App/Validators/SalaValidator";

export default class SalasController {
    index ({request}){
        const {nome, capacidade, tipo} = request.all()
        const sala = Sala.query().preload('turmas')

        if (nome) {
            sala.where('nome', nome)
        }else if (capacidade) {
            sala.where('capacidade', capacidade)
        }else if (tipo) {
            sala.where('tipo', tipo)
        }

        return sala
    }

    async store ({request}){
        const data = await request.validate(SalaValidator)
        
        return Sala.create(data)
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

    async update({request}) {
        const id = request.param('id')
        const data = request.only(["nome", "capacidade", "tipo"])

        const update = await Sala.findOrFail(id)
        update.merge(data).save()

        return update
    }
}
