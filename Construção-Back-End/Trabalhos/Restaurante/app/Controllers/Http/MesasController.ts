// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Mesa from "App/Models/Mesa";
import MesaValidator from "App/Validators/MesaValidator";

export default class MesasController {
    index({request}) {
        const {numero, restauranteId} = request.all()
        const mesas = Mesa.query().preload("restaurante").preload("pedido").select(['id','numero', 'restauranteId'])

        if (numero) {
            mesas.where('numero', numero)
        } else if (restauranteId) {
            mesas.where('restauranteId', restauranteId)
        }

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
        const data = request.only(['numero', 'restauranteId'])

        const update = await Mesa.findOrFail(id)
        update.merge(data).save()

        return update
    }
}
