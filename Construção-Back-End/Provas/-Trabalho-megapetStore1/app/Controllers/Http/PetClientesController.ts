// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import PetCliente from "App/Models/PetCliente"
import PetClienteValidator from "App/Validators/PetClienteValidator"

export default class PetClientesController {
    index({request}) {
        let {  petId, clienteId, page } = request.all()
        
        page = page ? page : 1
        const primeiraPagina = 1
        const quantidadePorPagina = 10

        const petCliente = PetCliente
            .query()

        if (clienteId) {
            return petCliente.where('clienteId', clienteId).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (petId) {
            return petCliente.where('petId', petId).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else {
            return petCliente.paginate(page ? page : primeiraPagina, quantidadePorPagina)
        }        
    }

    async store({ request }) {
        const dados = await request.validate(PetClienteValidator)

        return PetCliente.create(dados)
    }

    async show({ request }) {
        const id = await request.param('id')

        return await PetCliente.query().where('id', id).firstOrFail()
    }

    async destroy({ request }) {
        const id = request.param('id')
        const dados = await PetCliente.findOrFail(id)

        return dados.delete()
    }

    async update({ request }) {
        const id = request.param('id')
        const dados = await PetCliente.findOrFail(id)
        const dado = await request.validate(PetClienteValidator)

        return dados.merge(dado).save()
    }
}
