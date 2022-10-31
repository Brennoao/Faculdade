// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aluno from "App/Models/Aluno";
import AlunoValidator from "App/Validators/AlunoValidator";

export default class AlunosController {
    index ({request}){
        const {nome, cpf, matricula, email, cep, logradouro, complemento, numero, bairro} = request.all()
        const aluno = Aluno.query().preload('turmas').preload('chamadas')

        if (nome) {
            aluno.where('nome', nome)
        }else if (cpf) {    
            aluno.where('cpf', cpf)
        }else if (matricula) {
            aluno.where('matricula', matricula)
        }else if (email) {
            aluno.where('email', email)
        }else if (cep) {
            aluno.where('cpf', cpf)
        }else if (logradouro) {
            aluno.where('logradouro', logradouro)
        }else if (complemento) {
            aluno.where('complemento', complemento)
        }else if (numero) {
            aluno.where('numero', numero)
        }else if (bairro) {
            aluno.where('bairro', bairro)
        }

        return aluno
    }

    async store ({request}) {
        const data = await request.validate(AlunoValidator)

        return Aluno.create(data)
    }

    async show({request}) {
        const id = request.param('id')

        return await Aluno.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const aluno = await Aluno.findOrFail(id)

        return aluno.delete()
    }

    async update({request}) {
        const id = request.param('id')
        const data = request.only(["nome", "cpf", "matricula", "email", "cep", "logradouro", "complemento", "numero", "bairro"])

        const update = await Aluno.findOrFail(id)
        update.merge(data).save()

        return update
    }
}
