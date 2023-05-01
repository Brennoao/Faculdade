// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Pet from "App/Models/Pet"
import PetValidator from "App/Validators/PetValidator"

export default class PetsController {
    index({ request }) {
        let { nome, cor, racaId, tipoId, page } = request.all()

        page = page ? page : 1
        const primeiraPagina = 1
        const quantidadePorPagina = 10

        const pet = Pet
            .query()
            .preload('tipo')
            .preload('raca')            
            .preload('cliente')            
            .preload('atendimentos', (atendimentoPreload => {
                atendimentoPreload.preload('funcionario').preload('procedimentos')
            }))

        if (nome) {
            return pet.where('nome', nome).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (cor) {
            return pet.where('cor', cor).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (racaId) {
            return pet.where('racaId', racaId).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (tipoId) {
            return pet.where('tipoId', tipoId).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else {
            return pet.paginate(page ? page : primeiraPagina, quantidadePorPagina)
        }

    }

    async store({ request }) {
        const dados = await request.validate(PetValidator)

        return Pet.create(dados)
    }

    async show({ request }) {
        const id = await request.param('id')

        return await Pet
            .query()
            .where('id', id)
            .preload('tipo')
            .preload('raca')            
            .preload('cliente')            
            .preload('atendimentos', (atendimentoPreload => {
                atendimentoPreload.preload('funcionario').preload('procedimentos')
            }))
            .firstOrFail()
    }

    async destroy({ request }) {
        const id = request.param('id')
        const dados = await Pet.findOrFail(id)

        return dados.delete()
    }

    async update({ request }) {
        const id = request.param('id')
        const dados = await Pet.findOrFail(id)
        const dado = await request.validate(PetValidator)

        return dados.merge(dado).save()
    }
}
