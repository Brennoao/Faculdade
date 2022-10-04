import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Turma from 'App/Models/Turma'

export default class extends BaseSeeder {
  public async run () {
    await Turma.createMany([
      {nome: "macho", professorId: 1, semestreId: 1, disciplinaId: 1, salaId: 1, turno: "M"},
    ])
  }
}
