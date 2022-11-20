// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Tipo from "App/Models/Tipo";
import TipoValidator from "App/Validators/TipoValidator";

export default class TiposController {
    index({request}) {
        const {nome} = request.all()
        const tipos = Tipo.query().preload("produto").select(['id', 'nome'])

        if (nome) {
            tipos.where('nome', nome)
        }

        return tipos
    }

    async store({request}) {
        const data = await request.validate(TipoValidator)

        return Tipo.create(data)
    }

    async show({request}) {
        const id = request.param('id')

        return await Tipo.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const tipos = await Tipo.findOrFail(id)

        return tipos.delete()
    }

    async update({request}) {
        const id = request.param('id')
        const data = request.only(['nome'])

        const update = await Tipo.findOrFail(id)
        update.merge(data).save()

        return update
    }
}
