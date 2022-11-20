import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Turma from 'App/Models/Turma'

export default class extends BaseSeeder {
   async run () {
    await Turma.createMany([
      {nome: "macho", professoreId: 1, semestreId: 1, disciplinaId: 1, salaId: 1, turno: "M"},
      {nome: "macha", professoreId: 2, semestreId: 2, disciplinaId: 2, salaId: 2, turno: "v"},
      {nome: "mache", professoreId: 3, semestreId: 3, disciplinaId: 3, salaId: 3, turno: "M"}
    ])
  }
}
