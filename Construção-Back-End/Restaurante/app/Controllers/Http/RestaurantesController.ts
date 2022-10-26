// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Restaurante from "App/Models/Restaurante"

export default class RestaurantesController {
    index ({request}) {
          const restaurante = request.all()

        return restaurante
    }

    async store ({request}) {
        const data = request.only(["cnpj"])

        return await Restaurante.create(data)
    }

    show ({request}) {
        const id = request.param('id')

        return Restaurante.find(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const restaurante = await Restaurante.findOrFail(id)

        return restaurante.delete()
    }

    async update ({request}) {
        const id = request.param('id')
        const data = request.only(["cnpj"])

        const update = await Restaurante.findOrFail(id)
        update.merge(data).save()

        return update
    }
}
