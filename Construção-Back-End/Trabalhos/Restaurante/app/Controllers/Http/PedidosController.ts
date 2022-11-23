import Pedido from "App/Models/Pedido";
import PedidoValidator from "App/Validators/PedidoValidator";

export default class PedidosController {
    index({ request }) {
        const { mesaId, funcionarioId, data, formaPagamento } = request.all()
        const pedidos = Pedido.query().preload("funcionario").preload("mesa").preload("produtos").select(['id', 'mesaId', 'funcionarioId', 'data', 'formaPagamento'])

        if (mesaId) {
            pedidos.where('mesaId', mesaId)
        } else if (funcionarioId) {
            pedidos.where('funcionarioId', funcionarioId)
        } else if (data) {
            pedidos.where('data', data)
        } else if (formaPagamento) {
            pedidos.where('formaPagamento', formaPagamento)
        }

        return pedidos
    }

    async store({ request }) {
        const data = await request.validate(PedidoValidator)

        return Pedido.create(data)
    }

    async show({ request }) {
        const id = request.param('id')
        const pedido = await Pedido.query()
        .where("id", id)
        .preload("pedidoProdutos", (pedidoPreload => {
            pedidoPreload.preload("produto")
        })).first()

        let valorTotal = 0

        pedido?.pedidoProdutos.forEach((obj)=>{
            valorTotal += obj.quantidade * obj.valor
        })

        return {...pedido?.toJSON(), valorTotal}   
    }

    async destroy({ request }) {
        const id = request.param('id')
        const pedidos = await Pedido.findOrFail(id)

        return pedidos.delete()
    }

    async update({ request }) {
        const id = request.param('id')
        const data = request.only(['mesaId', 'funcionarioId', 'data', 'formaPagamento'])

        const update = await Pedido.findOrFail(id)
        update.merge(data).save()

        return update
    }
}
