import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Professore from 'App/Models/Professore'

export default class extends BaseSeeder {
  public async run () {
    
    await Professore.createMany([
      {nome: 'Bill', cpf: 10600000000, matricula: '035412', salario: 1200000, email: 'liscencadura@icloud.com', telefone: 302541214, cep: 325695, logradouro: "centro do World", complemento: 'em cima do putero', numero: 90, bairro: 'nalfrago'},
      {nome: 'cara', cpf: 10600000000, matricula: '035412', salario: 1200000, email: 'liscencadura@icloud.com', telefone: 302541214, cep: 325695, logradouro: "centro do World", complemento: 'em cima do putero', numero: 90, bairro: 'nalfrago'},
      {nome: 'poli', cpf: 10600000000, matricula: '035412', salario: 1200000, email: 'liscencadura@icloud.com', telefone: 302541214, cep: 325695, logradouro: "centro do World", complemento: 'em cima do putero', numero: 90, bairro: 'nalfrago'}
    ])
  }
}
