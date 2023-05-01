import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Tipo from 'App/Models/Tipo'

export default class extends BaseSeeder {
  public async run () {
    await Tipo.createMany([
      {nome: "Gato"},
      {nome: "Cachorro"},
      {nome: "Peixe"},
      {nome: "Cobra"},
      {nome: "Outros"}
    ])
  }
}

