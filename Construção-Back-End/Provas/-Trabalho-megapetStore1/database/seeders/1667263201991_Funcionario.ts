import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Funcionario from 'App/Models/Funcionario'

export default class extends BaseSeeder {
  public async run () {
    await Funcionario.createMany([
      { nome: "Larissa da Paz", cpf: "91219793086", telefone: "61578445283", email: "frankie74@yahoo.com", cep: "72252503", endereco: "Quadra EQNO 9/11 Bloco C", complemento: "Ceilândia Norte (Ceilândia)", numero: "34"},
      { nome: "Júlia da Costa", cpf: "58358854315", telefone: "61329295800", email: "emily_blunt@yahoo.com", cep: "71825225", endereco: "Quadra QS 12 Área Especial E", complemento: "Riacho Fundo I", numero: "12"},
      { nome: "Maria Clara Nascimento", cpf: "78551460323", telefone: "61212872465", email: "wilmer.hansen@yahoo.com", cep: "72240405", endereco: "Quadra QNP 5 Conjunto E", complemento: "Ceilândia Norte (Ceilândia)", numero: "16"},
      { nome: "Enzo Gabriel Moraes", cpf: "51290648018", telefone: "61586448913", email: "lillie.considine92@gmail.com", cep: "71555106", endereco: "Quadra Quadra 4 Conjunto B", complemento: "Varjão", numero: "9"},
      { nome: "Danilo Silva", cpf: "31261665040", telefone: "61533117472", email: "jace.jacobs@gmail.com", cep: "73355012", endereco: "Rua Rua 3 Chácara 89", complemento: "Setor Habitacional Vicente Pires", numero: "43"}
    ])
  }
}
