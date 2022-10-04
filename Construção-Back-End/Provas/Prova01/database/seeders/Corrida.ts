import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Corrida from 'App/Models/Corrida'

export default class extends BaseSeeder {
  public async run () {
    await Corrida.createMany([
      {local: "Londres", dia: new Date(2022,10,15)},
      {local: "China", dia: new Date(2022,10,22)},
      {local: "Paris", dia: new Date(2022,10,25)},
      {local: "Brazil", dia: new Date(2022,10,29)},
      {local: "Russia", dia: new Date(2022,11,10)},
    ])
  }
}
