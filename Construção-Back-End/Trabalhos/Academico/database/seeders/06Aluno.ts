import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aluno from 'App/Models/Aluno'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Aluno.createMany ([
      {nome: 'Brenno', cpf: 22222222222, matricula: 21214290011, email: 'oscardemozo@gmail.com.br', cep: 54125412, logradouro: 'qnp 54 conj 20', complemento: 'atraz do mozo', numero: 50, bairro: 'Setor (sopa)'},
      {nome: 'Caboco', cpf: 2222092222, matricula: 21214290011, email: 'oscardemozo@gmail.com.br', cep: 54125412, logradouro: 'qnp 54 conj 20', complemento: 'atraz do mozo', numero: 50, bairro: 'Setor (sopa)'},
      {nome: 'Losca', cpf: 22222902222, matricula: 21214290011, email: 'oscardemozo@gmail.com.br', cep: 54125412, logradouro: 'qnp 54 conj 20', complemento: 'atraz do mozo', numero: 50, bairro: 'Setor (sopa)'}
    ])
  }
}
