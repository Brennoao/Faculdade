// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Pedido from "App/Models/Pedido";
import PedidoValidator from "App/Validators/PedidoValidator";

export default class PedidosController {
    index() {
        const pedidos = Pedido.query().select(['id', 'mesaIdmesa', 'funcionariosIdfuncionarios', 'data', 'formaPagamento'])

        return pedidos
    }

    async store({request}) {
        const data = await request.validate(PedidoValidator)

        return Pedido.create(data)
    }

    async show({request}) {
        const id = request.param('id')

        return await Pedido.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const pedidos = await Pedido.findOrFail(id)

        return pedidos.delete()
    }

    async update({request}) {
        const id = request.param('id')
        const data = request.only(['mesaIdmesa', 'funcionariosIdfuncionarios', 'data', 'formaPagamento'])

        const update = await Pedido.findOrFail(id)
        update.merge(data).save()

        return update
    }
}
