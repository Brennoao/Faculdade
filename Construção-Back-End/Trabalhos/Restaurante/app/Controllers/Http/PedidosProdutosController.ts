import PedidosProduto from "App/Models/PedidosProduto";
import PedidosProdutoValidator from "App/Validators/PedidosProdutoValidator";

export default class PedidosProdutosController {
    index({request}) {
        const {pedidoId, produtoId, quantidade, valor} = request.all()
        const PedidosProdutos = PedidosProduto.query().preload("pedido").preload("produto").select(['id', 'pedidoId', 'produtosId', 'quantidade', 'valor'])

        if (pedidoId) {
            PedidosProdutos.where('pedidoId', pedidoId)
        }else if (produtoId) {
            PedidosProdutos.where('produtoId', produtoId)
        }else if (quantidade) {
            PedidosProdutos.where('quantidade', quantidade)
        }else if (valor) {
            PedidosProdutos.where('valor', valor)
        }

        return PedidosProdutos 
    }

    async store({request}) {
        const data = await request.validate(PedidosProdutoValidator)

        return PedidosProduto.create(data)
    }

    async show({request}) {
        const id = request.param('id')

        return await PedidosProduto.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const pedidoId = await PedidosProduto.findOrFail(id)

        return pedidoId.delete()
    }

    async update({request}) {
        const id = request.param('íd')
        const data = request.only(['pedidoId', 'produtoId', 'quantidade', 'valor'])

        const update = await PedidosProduto.findOrFail(id)
        update.merge(data).save()

        return update
    }
}
