// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Procedimento from "App/Models/Procedimento"
import ProcedimentoValidator from "App/Validators/ProcedimentoValidator"

export default class ProcedimentosController {
    index({ request }) {
        let { nome, valor, page } = request.all()

        page = page ? page : 1
        const primeiraPagina = 1
        const quantidadePorPagina = 10

        const procedimento = Procedimento
            .query()
            .preload('atendimentos', (atendimentoPreload => {
                atendimentoPreload.preload('pet', (atendimentoPetPreload => {
                    atendimentoPetPreload.preload('tipo').preload('raca')
                })).preload('funcionario')
            }))

        if (nome) {
            return procedimento.where('nome', nome).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (valor) {
            return procedimento.where('valor', valor).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else {
            return procedimento.paginate(page ? page : primeiraPagina, quantidadePorPagina)
        }

    }

    async store({ request }) {
        const dados = await request.validate(ProcedimentoValidator)

        return Procedimento.create(dados)
    }

    async show({ request }) {
        const id = await request.param('id')

        return await Procedimento
            .query()
            .where('id', id)
            .preload('atendimentos', (atendimentoPreload => {
                atendimentoPreload.preload('pet', (atendimentoPetPreload => {
                    atendimentoPetPreload.preload('tipo').preload('raca')
                })).preload('funcionario')
            }))
            .firstOrFail()
    }

    async destroy({ request }) {
        const id = request.param('id')
        const dados = await Procedimento.findOrFail(id)

        return dados.delete()
    }

    async update({ request }) {
        const id = request.param('id')
        const dados = await Procedimento.findOrFail(id)
        const dado = await request.validate(ProcedimentoValidator)

        return dados.merge(dado).save()
    }
}
