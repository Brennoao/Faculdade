import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Professore from 'App/Models/Professore'

export default class extends BaseSeeder {
  public async run () {
    
    await Professore.createMany([
      {nome: 'Bill', cpf: 10605600000, matricula: 835412, salario: 1200000, email: 'liscencadura@icloud.com', telefone: 302541214, cep: 325695, logradouro: "centro do World", complemento: 'em cima do putero', numero: 90, bairro: 'nalfrago'},
      {nome: 'cara', cpf: 10609000000, matricula: 535412, salario: 1200000, email: 'liscencadura@icloud.com', telefone: 302540214, cep: 325695, logradouro: "centro do World", complemento: 'em cima do putero', numero: 90, bairro: 'nalfrago'},
      {nome: 'poli', cpf: 10601000000, matricula: 135412, salario: 1200000, email: 'liscencadura@icloud.com', telefone: 302544014, cep: 325695, logradouro: "centro do World", complemento: 'em cima do putero', numero: 90, bairro: 'nalfrago'}
    ])
  }
}
