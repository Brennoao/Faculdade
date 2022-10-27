// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Fornecedore from "App/Models/Fornecedore";

export default class FornecedoresController {
    index() {
        return Fornecedore.query()
    }

    async store({request}) {
        const data = request.only(['razao_social', 'cnpj', 'cep', 'endereco', 'telefone', 'celular'])

        return Fornecedore.create(data)
    }
}
