// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import PedidosHasProduto from "App/Models/PedidosHasProduto";
import PedidosHasProdutoValidator from "App/Validators/PedidosHasProdutoValidator";

export default class PedidosHasProdutosController {
    index() {
        const pedidosHasProdutos = PedidosHasProduto.query().select(['id', 'pedidoIdpedido', 'produtoIdproduto', 'quantidade', 'valor'])

        return pedidosHasProdutos 
    }

    async store({request}) {
        const data = await request.validate(PedidosHasProdutoValidator)

        return PedidosHasProduto.create(data)
    }

    async show({request}) {
        const id = request.param('id')

        return await PedidosHasProduto.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const pedidoIdpedido = await PedidosHasProduto.findOrFail(id)

        return pedidoIdpedido.delete()
    }

    async update({request}) {
        const id = request.param('íd')
        const data = request.only(['pedidoIdpedido', 'produtoIdproduto', 'quantidade', 'valor'])

        const update = await PedidosHasProduto.findOrFail(id)
        update.merge(data).save()

        return update
    }
}
