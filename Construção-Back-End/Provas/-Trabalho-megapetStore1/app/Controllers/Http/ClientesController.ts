// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cliente from "App/Models/Cliente"
import ClienteUpdateValidator from "App/Validators/ClienteUpdateValidator"
import ClienteValidator from "App/Validators/ClienteValidator"

export default class ClientesController {
    async index({ request }) {
        let { nome, cpf, telefone, email, cep, endereco, complemento, numero, page } = request.all()

        page = page ? page : 1
        const primeiraPagina = 1
        const quantidadePorPagina = 10

        const cliente = Cliente
            .query()
            .preload('pets', (petPreload => { petPreload.preload('raca').preload('tipo') }))

        if (nome) {
            return await cliente.where('nome', nome).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (cpf) {
            return await cliente.where('cpf', cpf).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (telefone) {
            return await cliente.where('telefone', telefone).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (email) {
            return await cliente.where('email', email).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (cep) {
            return await cliente.where('cep', cep).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (endereco) {
            return await cliente.where('endereco', endereco).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (complemento) {
            return await cliente.where('complemento', complemento).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (numero) {
            return await cliente.where('numero', numero).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else {
            return await cliente.paginate(page ? page : primeiraPagina, quantidadePorPagina)
        }

    }

    async store({ request }) {
        const dados = await request.validate(ClienteValidator)

        return Cliente.create(dados)
    }

    async show({ request }) {
        const id = await request.param('id')

        return await Cliente
            .query()
            .where('id', id)
            .preload('pets', (petPreload => { petPreload.preload('raca').preload('tipo') }))
            .firstOrFail()
    }

    async destroy({ request }) {
        const id = request.param('id')
        const dados = await Cliente.findOrFail(id)

        return dados.delete()
    }

    async update({ request }) {
        const id = request.param('id')
        const dados = await Cliente.findOrFail(id)
        const dado = await request.validate(ClienteUpdateValidator)

        return dados.merge(dado).save()
    }
}
