// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Restaurante from "App/Models/Restaurante"
import RestauranteValidator from "App/Validators/RestauranteValidator"

export default class RestaurantesController {
    index({request}){
        const {cnpj, razaoSocial, inscricaoEstadual} = request.all()
        const restaurante = Restaurante.query().preload("funcionario").preload("fornecedore").preload("mesa").select(['id', 'cnpj', 'razaoSocial', 'inscricaoEstadual'])

        if (cnpj) {
            restaurante.where('cnpj', cnpj)
        }else if (razaoSocial) {
            restaurante.where('razaoSocial', razaoSocial)
        }else if (inscricaoEstadual) {
            restaurante.where('inscricaoEstadual', inscricaoEstadual)
        }

        return restaurante
    }

    async store({request}) {
        const data = await request.all()//validate(RestauranteValidator)

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
