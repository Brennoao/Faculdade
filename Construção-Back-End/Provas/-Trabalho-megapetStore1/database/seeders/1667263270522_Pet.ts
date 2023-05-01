import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Pet from 'App/Models/Pet'

export default class extends BaseSeeder {
  public async run () {
    await Pet.createMany([
      {nome: "Flash", cor: "preto", racaId: 1, tipoId: 2},
      {nome: "Alex", cor: "pardo", racaId: 5, tipoId: 2},
      {nome: "Belinha", cor: "preto", racaId: 2, tipoId: 2},
      {nome: "Lulu", cor: "branco", racaId: 3, tipoId: 2},
      {nome: "Brutus", cor: "malhado", racaId: 5, tipoId: 2}
    ])
  }
}
