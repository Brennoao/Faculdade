import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Disciplina from 'App/Models/Disciplina'

export default class extends BaseSeeder {
  public async run () {
    
    await Disciplina.createMany([
      {nome: 'Frontend', cursoId: 1},
      {nome: 'Backtend', cursoId: 2},
      {nome: 'Redes I', cursoId: 3},
      {nome: 'Anatomia', cursoId: 4},
      {nome: 'História do brasil', cursoId: 5},
      {nome: 'História do Mundo', cursoId: 6},
      {nome: 'Dir Administrativo', cursoId: 7},
      {nome: 'Dir. Penal', cursoId: 8},
      {nome: 'Freud', cursoId: 9},
      {nome: 'Alfabetização', cursoId: 10},
    ])
  }
}
