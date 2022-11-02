// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Produtos from "App/Models/Produtos";
import ProdutoValidator from "App/Validators/ProdutoValidator";

export default class ProdutosController {
    index() {
        const produtos = Produtos.query().select(['id', 'nome', 'quantidade', 'calorias', 'fornecedorIdfornecedor', 'valor', 'tipoIdtipo'])

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
        const data = request.only(['nome', 'quantidade', 'calorias', 'fornecedorIdfornecedor', 'valor', 'tipoIdtipo'])

        const update = await Produtos.findOrFail(id)
        update.merge(data).save()

        return update
    }
}
 