import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Funcionario from 'App/Models/Funcionario'

export default class extends BaseSeeder {
  public async run () {
    await Funcionario.createMany([
      {nome: "Jubileu", cpf: 12345678911, registroGeral: 1234567, email: "jubileuronaldo@gmail.com", cargo: "Limpesa", senha: "asdasfafr", restauranteId: 1},
      {nome: "Natsu1", cpf: 22345698911, registroGeral: 3234567, email: "Natsuronaldo@gmail.com", cargo: "Garcom", senha: "asdasfafr", restauranteId: 1},
      {nome: "Natsu2", cpf: 22365677911, registroGeral: 4234567, email: "Natsu1ronaldo@gmail.com", cargo: "Cozinheiro", senha: "asdasfafr", restauranteId: 1},
      {nome: "Natsu3", cpf: 22348670911, registroGeral: 5234567, email: "Natsu2ronaldo@gmail.com", cargo: "Atendente", senha: "asdasfafr", restauranteId: 1},
      {nome: "Natsu4", cpf: 22345376911, registroGeral: 6234567, email: "Natsu3ronaldo@gmail.com", cargo: "Garcom", senha: "asdasfafr", restauranteId: 1}
    ])
    // Write your database queries inside the run method
  }
}
