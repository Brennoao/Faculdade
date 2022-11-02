// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Restaurante from "App/Models/Restaurante"
import RestauranteValidator from "App/Validators/RestauranteValidator"

export default class RestaurantesController {
    index(){
        const restaurante = Restaurante.query().select(['id', 'cnpj'])

        return restaurante
    }

    async store({request}) {
        const data = await request.validate(RestauranteValidator)

        return Restaurante.create(data)
    }

    async show({request}) {
        const id = request.param('id')

        return await Restaurante.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const restaurante = await Restaurante.findOrFail(id)
        restaurante.delete()
        return restaurante
    }

    async update({request}) {
        const id = request.param('id')
        const data = await request.only(['id', 'cnpj'])

        const update = await Restaurante.findOrFail(id)
        update.merge(data)

        return update.save()
    }


}
