import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Tipo from 'App/Models/Tipo'

export default class extends BaseSeeder {
  public async run () {
    await Tipo.createMany([
      {nome: "Pizza"},
      {nome: "Pizza_Doce"},
      {nome: "Hambúrguer"},
      {nome: "Salgado"},
      {nome: "Pastel"},
      {nome: "Refrigerante"},
      {nome: "Suco"},
    ])
  }
}
