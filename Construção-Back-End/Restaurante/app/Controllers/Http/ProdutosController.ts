// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Produtos from "App/Models/Produto";
import ProdutoValidator from "App/Validators/ProdutoValidator";

export default class ProdutosController {
    index({request}) {
        const {nome, quantidade, caloria, fornecedorId, valor, tipoIdtipo} = request.all()
        const produtos = Produtos.query().preload("pedido").preload("tipo").select(['id', 'nome', 'quantidade', 'caloria', 'fornecedorId', 'valor', 'tipoId'])

        if (nome) {
            produtos.where('nome', nome)
        } else if (quantidade) {
            produtos.where('quantidade', quantidade)
        } else if (caloria) {
            produtos.where('caloria', caloria)
        } else if (fornecedorId) {
            produtos.where('fornecedorId', fornecedorId)
        } else if (valor) {
            produtos.where('valor', valor)
        } else if (tipoIdtipo) {
            produtos.where('tipoIdtipo', tipoIdtipo)
        }

        return produtos
    }

    async store({request}) {
        const data = await request.validate(ProdutoValidator)

        return Produtos.create(data)
    }

    async show({request}) {
        const id = request.param('id')

        return await Produtos.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const produtos = await Produtos.findOrFail(id)

        return produtos.delete()
    }

    async update({request}) {
        const id = request.param('id')
        const data = request.only(['nome', 'quantidade', 'caloria', 'fornecedorId', 'valor', 'tipoId'])

        const update = await Produtos.findOrFail(id)
        update.merge(data).save()

        return update
    }
}
 