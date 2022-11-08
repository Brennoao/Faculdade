import PedidosHasProduto from "App/Models/PedidosHasProduto";
import PedidosHasProdutoValidator from "App/Validators/PedidosHasProdutoValidator";

export default class PedidosHasProdutosController {
    index({request}) {
        const {pedidoId, produtoId, quantidade, valor} = request.all()
        const pedidosHasProdutos = PedidosHasProduto.query().select(['id', 'pedidoId', 'produtosId', 'quantidade', 'valor'])

        if (pedidoId) {
            pedidosHasProdutos.where('pedidoId', pedidoId)
        }else if (produtoId) {
            pedidosHasProdutos.where('produtoId', produtoId)
        }else if (quantidade) {
            pedidosHasProdutos.where('quantidade', quantidade)
        }else if (valor) {
            pedidosHasProdutos.where('valor', valor)
        }

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
        const data = request.only(['pedidoId', 'produtoId', 'quantidade', 'valor'])

        const update = await PedidosHasProduto.findOrFail(id)
        update.merge(data).save()

        return update
    }
}
