import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Procedimento from 'App/Models/Procedimento'

export default class extends BaseSeeder {
  public async run () {
    await Procedimento.createMany([
      {nome: "Consulta Animal Pequeno", valor: 100.00},
      {nome: "Banho/tosa Animal Pequeno", valor: 70.00},
      {nome: "Consulta Animal Grande", valor: 130.00},
      {nome: "Banho/Tosa Animal Grande", valor: 90.00},
      {nome: "Consulta em casa", valor: 175.00}
    ])
  }
}
