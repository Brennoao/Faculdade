// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Raca from "App/Models/Raca"
import RacaValidator from "App/Validators/RacaValidator"

export default class RacasController {
    index({request}) {
        let { nome, page } = request.all()

        page = page ? page : 1
        const primeiraPagina = 1
        const quantidadePorPagina = 10

        const raca = Raca
            .query()
            .preload('pets', (petPreload => { petPreload.preload('tipo') }))

        if (nome) {
            return raca.where('nome', nome).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else {
            return raca.paginate(page ? page : primeiraPagina, quantidadePorPagina)
        }
      
    }

    async store({ request }) {
        const dados = await request.validate(RacaValidator)

        return Raca.create(dados)
    }

    async show({ request }) {
        const id = await request.param('id')

        return await Raca
            .query()
            .where('id', id)
            .preload('pets', (petPreload => { petPreload.preload('tipo') }))
            .firstOrFail()
    }

    async destroy({ request }) {
        const id = request.param('id')
        const dados = await Raca.findOrFail(id)

        return dados.delete()
    }

    async update({ request }) {
        const id = request.param('id')
        const dados = await Raca.findOrFail(id)
        const dado = await request.validate(RacaValidator)

        return dados.merge(dado).save()
    }
}
