import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aula from 'App/Models/Aula'

export default class extends BaseSeeder {
  public async run () {
    await Aula.createMany([
      {data: new Date("2000-06-06"), conteudo: "loco", turmaId: 1},
      {data: new Date("2000-06-06"), conteudo: "lost", turmaId: 2},
      {data: new Date("2000-06-06"), conteudo: "lasco", turmaId: 3}
    ])
  }
}
