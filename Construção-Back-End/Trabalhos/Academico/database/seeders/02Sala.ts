import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Sala from 'App/Models/Sala'

export default class extends BaseSeeder {
  public async run () {
    await Sala.createMany([
      {nome: "Baseus", capacidade: 20, tipo: "Jubileu"},
      {nome: "Tobias", capacidade: 10, tipo: "Jubileu"},
      {nome: "Jubileu", capacidade: 30, tipo: "Jubileu"}
    ])
  }
}
