import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TurmaAluno from 'App/Models/TurmaAluno'

export default class extends BaseSeeder {
  public async run () {
    await TurmaAluno.createMany([
      {turmaId: 1, alunoId: 1},
      {turmaId: 2, alunoId: 2},
      {turmaId: 3, alunoId: 3}
    ])
  }
}
