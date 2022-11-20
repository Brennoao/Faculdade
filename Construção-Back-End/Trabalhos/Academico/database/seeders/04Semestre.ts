import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Semestre from 'App/Models/Semestre'

export default class extends BaseSeeder {
  public async run () {
    await Semestre.createMany([
      {nome: "jubileu", dataInicio: new Date("2000-06-26"), dataFim: new Date("2010-10-05")},
      {nome: "jubifip", dataInicio: new Date("2000-06-26"), dataFim: new Date("2010-10-05")},
      {nome: "ajksdh", dataInicio: new Date("2000-06-26"), dataFim: new Date("2010-10-05")}
    ])
  }
}
