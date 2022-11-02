// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Mesa from "App/Models/Mesa";
import MesaValidator from "App/Validators/MesaValidator";

export default class MesasController {
    index() {
        const mesas = Mesa.query().select(['numero', 'restauranteIdrestaurante'])

        return mesas
    }

    async store({request}) {
        const data = await request.validate(MesaValidator)

        return Mesa.create(data)
    }

    async show({request}) {
        const id = request.param('id')

        return await Mesa.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const mesas = await Mesa.findOrFail(id)

        return mesas.delete()
    }

    async update({request}) {
        const id = request.param('id')
        const data = request.only(['numero', 'restauranteIdrestaurante'])

        const update = await Mesa.findOrFail(id)
        update.merge(data).save()

        return update
    }
}
