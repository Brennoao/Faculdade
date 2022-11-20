import Funcionario from "App/Models/Funcionario";
import FuncionarioValidator from "App/Validators/FuncionarioValidator";

export default class FuncionariosController {
    index({request}) {
        const {nome, cpf, registroGeral, email, cargo, senha, restauranteId} = request.all()
        const funcionarios = Funcionario.query().preload("restaurante").preload("pedido").select(['id', 'nome', 'cpf', 'registroGeral', 'email', 'cargo', 'senha', 'restauranteId'])

        if (nome) {
            funcionarios.where('nome', nome)
        } else if (cpf) {
            funcionarios.where('cpf', cpf)
        } else if (registroGeral) {
            funcionarios.where('registroGeral', registroGeral)
        } else if (email) {
            funcionarios.where('email', email)
        } else if (cargo) {
            funcionarios.where('cargo', cargo)
        } else if (senha) {
            funcionarios.where('senha', senha)
        } else if (restauranteId) {
            funcionarios.where('restauranteId', restauranteId)
        }
        
        return funcionarios
    }

    async store({request}) {
        const data = await request.validate(FuncionarioValidator)

        return Funcionario.create(data)
    }

    async destroy({request}) {
        const id = request.param('id')
        const funcionarios = await Funcionario.findOrFail(id)

        return funcionarios.delete()
    }

    async update({request}) {
        const id = request.param('id')
        const data = request.only([ 'nome', 'cpf', 'registroGeral', 'email', 'cargo', 'senha', 'restauranteId'])

        const update = await Funcionario.findOrFail(id)
        update.merge(data).save()

        return update
    }
}
