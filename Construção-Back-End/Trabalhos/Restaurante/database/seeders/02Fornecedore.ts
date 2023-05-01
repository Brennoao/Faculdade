import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Fornecedore from 'App/Models/Fornecedore'

export default class extends BaseSeeder {
  public async run () {
    await Fornecedore.createMany([
      {razaoSocial: "Jubileu", cnpj: 12345678910123, endereco: "qnp 20-Conj 60-Lote 40", telefone: 6589015, celular: 9763025, restauranteId: 1},
      {razaoSocial: "Juliana", cnpj: 31345678910123, endereco: "qnp 20-Conj 20-Lote 40", telefone: 9078060, celular: 1269025, restauranteId: 1},
      {razaoSocial: "Heloisa1", cnpj: 21345678910123, endereco: "qnp 40-Conj 10-Lote 40", telefone: 5689025, celular: 9061025, restauranteId: 1},
      {razaoSocial: "Heloisa2", cnpj: 81345670010123, endereco: "qnp 40-Conj 10-Lote 40", telefone: 5689035, celular: 9067025, restauranteId: 1},
      {razaoSocial: "Heloisa3", cnpj: 91345677810123, endereco: "qnp 40-Conj 10-Lote 40", telefone: 5689005, celular: 9062025, restauranteId: 1}
    ])
  }
}
