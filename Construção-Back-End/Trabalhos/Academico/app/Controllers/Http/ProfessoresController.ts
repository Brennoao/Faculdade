// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Professore from "App/Models/Professore";
import ProfessoreValidator from "App/Validators/ProfessoreValidator";

export default class ProfessoresController {

    index({request}){
        const {nome, cpf, matricula, salario, email, telefone, cep, logradouro, complemento, numero, bairro} = request.all()
        const professore = Professore.query().preload("turmas")

        if (nome) {
            professore.where('nome', nome)
        }else if (cpf) {
            professore.where('cpf', cpf)
        }else if (matricula) {
            professore.where('matricula', matricula)
        }else if (salario) {
            professore.where('salario', salario)
        }else if (email) {
            professore.where('email', email)
        }else if (telefone) {
            professore.where('telefone', telefone)
        }else if (cep) {
            professore.where('cep', cep)
        }else if (logradouro) {
            professore.where('logradouro', logradouro)
        }else if (complemento) {
            professore.where('complemento', complemento)
        }else if (numero) {
            professore.where('numero', numero)
        }else if (bairro) {
            professore.where('bairro', bairro)
        }

        return professore

    }

    async store({request}){
        const dados = await request.validate(ProfessoreValidator)

        return Professore.create(dados)
    }

    show({request}) {
        const id = request.param('id')
        
        return Professore.find(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const professore = await Professore.findOrFail(id)

        return professore.delete()
    }

    async update({request}) {
        const id = request.param('id')
        const data = request.only(['nome', 'cpf', 'matricula', 'salario', 'email', 'telefone', 'cep', 'logradouro', 'complemento', 'numero', 'bairro'])

        const update = await Professore.findOrFail(id)
        update.merge(data).save()

        return update
    }
}
