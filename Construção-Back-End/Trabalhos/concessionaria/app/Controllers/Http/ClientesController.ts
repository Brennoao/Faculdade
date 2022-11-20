// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cliente from "App/Models/Cliente";

export default class ClientesController {
    index() {
        return Cliente.query().preload('carros').paginate(1)
        
    }

    store({request}) {
        const dados = request.only(['nomes', 'cpf', 'telefone'])
        
        return Cliente.create(dados)
    }

    async update({request}) {
        const id = request.param('id')
        const dados = request.only(['nomes', 'cpf', 'telefone'])
        const cliente = await Cliente.findOrFail(id)

        cliente.merge(dados)
        return cliente.save()
    }

    async destroy({request}) {
        const id = request.param('id')
        const cliente = await Cliente.findOrFail(id)

        return cliente.delete()
    }
}
