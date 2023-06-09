// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Fornecedore from "App/Models/Fornecedore"
// import FornecedoreValidator from "App/Validators/FornecedoreValidator"

export default class FornecedoresController {
    index ({request}) {
        const {razaoSocial, cnpj, cep, endereco, telefone, celular} = request.all()
        const fornecedores = Fornecedore.query().preload("produto").preload("restaurante").select(['id', 'razaoSocial', 'cnpj', 'cep', 'endereco', 'telefone', 'celular', 'restauranteId'])

        if (razaoSocial) {
            fornecedores.where('razaoSocial', razaoSocial)
        }else if (cnpj) {
            fornecedores.where('cnpj', cnpj)
        }else if (cep) {
            fornecedores.where('cep', cep)
        }else if (endereco) {
            fornecedores.where('endereco', endereco)
        }else if (telefone) {
            fornecedores.where('telefone', telefone)
        }else if (celular) {
            fornecedores.where('fornecedores', fornecedores)
        }

        return fornecedores
    }

    async store({request}) {
        const data = await request.all()//validate(FornecedoreValidator)

        return Fornecedore.create(data)
    }

    async show({request}) {
        const id = request.param('id')

        return await Fornecedore.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const fornecedores = await Fornecedore.findOrFail(id)

        return fornecedores.delete()
    }

    async update({request}) {
        const id = request.param('id')
        const data = request.all()//only(['razaoSocial', 'cnpj', 'cep', 'endereco', 'telefone', 'celular'])

        const update = await Fornecedore.findOrFail(id)
        update.merge(data).save()

        return update
    }
}
