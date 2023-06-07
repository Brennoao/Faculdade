import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Restaurante from 'App/Models/Restaurante'

export default class extends BaseSeeder {
  public async run () {
    await Restaurante.createMany([
      {cnpj: 10000000000100, razaoSocial: "FireHot", inscricaoEstadual: 123456789012},
      {cnpj: 10000000050100, razaoSocial: "FireHot1", inscricaoEstadual: 123450789012}
    ])
  }
}
