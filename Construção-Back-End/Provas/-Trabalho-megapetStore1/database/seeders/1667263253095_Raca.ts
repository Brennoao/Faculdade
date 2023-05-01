import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Raca from 'App/Models/Raca'

export default class extends BaseSeeder {
  public async run () {
    await Raca.createMany([
      {nome: "Vira-lata"},
      {nome: "Shih Tzu"},
      {nome: "Yorkshire"},
      {nome: "Buldogue francês"},
      {nome: "PitBull"}
    ])
  }
}
