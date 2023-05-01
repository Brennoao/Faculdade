import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run () {
    await Cliente.createMany([
      { nome: "Antônio Duarte", cpf: "46787012063", telefone: "82921645360", email: "chris_hemsworth@aol.com", cep: "26587110", endereco: "Ceilandia", complemento: "norte", numero: "40"},
      { nome: "Diogo Lopes", cpf: "79658113087", telefone: "6135838338", email: "emily_blunt@yahoo.com", cep: "59025280", endereco: "Taguatinga Norte", complemento: "rua 23", numero: "7"},
      { nome: "Danilo Mendes", cpf: "23701958009", telefone: "6128868135",email: "rosetta67@yahoo.com", cep: "64078140", endereco: "Itararé", complemento: "lado direito", numero: "4"},
      { nome: "Ana Vitória Cavalcanti", cpf: "05812112002", telefone: "6134741735",email: "neymar_junior@yahoo.com", cep: "26295099", endereco: "rua 3", complemento: "lote 2", numero: "8"},
      { nome: "Rodrigo Almeida", cpf: "91219793086", telefone: "6136293650",email: "uriel.hills11@gmail.com", cep: "35160142", endereco: "sol nascente", complemento: "chacara sol poente", numero: "3"}
    ])
  }
}
