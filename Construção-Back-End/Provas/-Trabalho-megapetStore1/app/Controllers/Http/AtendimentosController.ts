// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Atendimento from "App/Models/Atendimento"
import AtendimentoValidator from "App/Validators/AtendimentoValidator"

export default class AtendimentosController {
    index({ request }) {
        let { data, descricao, petId, funcionarioId, procedimentoId, page } = request.all()
        
        page = page ? page : 1
        const primeiraPagina = 1
        const quantidadePorPagina = 10

        const atendimento = Atendimento
            .query()
            .preload('procedimentos')
            .preload('pet', (petPreload => { petPreload.preload('raca').preload('tipo') }))
            .preload('funcionario')                        

        if (data) {
            return atendimento.where('data', data).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (descricao) {
            return atendimento.where('descricao', descricao).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (petId) {
            return atendimento.where('petId', petId).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (funcionarioId) {
            return atendimento.where('funcionarioId', funcionarioId).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (procedimentoId) {
            return atendimento.where('procedimentoId', procedimentoId).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else {
            return atendimento.paginate(page ? page : primeiraPagina, quantidadePorPagina)
        }
    }

    async store({ request }) {
        const dados = await request.validate(AtendimentoValidator)

        return Atendimento.create(dados)
    }

    async show({ request }) {
        const id = await request.param('id')

        return Atendimento
            .query()
            .where('id', id)
            .preload('procedimentos')
            .preload('pet', (petPreload => { petPreload.preload('raca').preload('tipo') }))
            .preload('funcionario')
            .firstOrFail()
    }

    async destroy({ request }) {
        const id = request.param('id')
        const dados = await Atendimento.findOrFail(id)

        return dados.delete()
    }

    async update({ request }) {
        const id = request.param('id')
        const dados = await Atendimento.findOrFail(id)
        const dado = await request.validate(AtendimentoValidator)

        return dados.merge(dado).save()
    }
}
