import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Curso from 'App/Models/Curso'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Curso.createMany([
      {nome: 'ADS', duracao: 5, modalidade: 'p'},
      {nome: 'Redes', duracao: 5, modalidade: 'p'},
      {nome: 'Direito', duracao: 10, modalidade: 'p'},
      {nome: 'Medicina', duracao: 10, modalidade: 'p'},
      {nome: 'Enfermagem', duracao: 8, modalidade: 'p'},
      {nome: 'Administração', duracao: 8, modalidade: 'e'},
      {nome: 'Astronomia', duracao: 5, modalidade: 'e'},
      {nome: 'Psicologia', duracao: 8, modalidade: 'h'},
      {nome: 'Gastronomia', duracao: 5, modalidade: 'p'},
      {nome: 'História', duracao: 5, modalidade: 'e'},
      {nome: 'Pedagodia', duracao: 5, modalidade: 'h'},
    ])
  }
}
