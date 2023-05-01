// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Tipo from "App/Models/Tipo"
import TipoValidator from "App/Validators/TipoValidator"

export default class TiposController {
    index({request}) {
        let { nome, page } = request.all()

        page = page ? page : 1
        const primeiraPagina = 1
        const quantidadePorPagina = 10

        const tipo = Tipo
            .query()
            .preload('pets', (petPreload => { petPreload.preload('raca') }))

        if (nome) {
            return tipo.where('nome', nome).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else {
            return tipo.paginate(page ? page : primeiraPagina, quantidadePorPagina)
        }        
    }

    async store({ request }) {
        const dados = await request.validate(TipoValidator)

        return Tipo.create(dados)
    }

    async show({ request }) {
        const id = await request.param('id')

        return await Tipo
            .query()
            .where('id', id)
            .preload('pets', (petPreload => { petPreload.preload('raca') }))
            .firstOrFail()
    }

    async destroy({ request }) {
        const id = request.param('id')
        const dados = await Tipo.findOrFail(id)

        return dados.delete()
    }

    async update({ request }) {
        const id = request.param('id')
        const dados = await Tipo.findOrFail(id)
        const dado = await request.validate(TipoValidator)

        return dados.merge(dado).save()
    }
}
