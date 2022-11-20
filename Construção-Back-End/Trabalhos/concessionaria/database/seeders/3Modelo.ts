import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Modelo from 'App/Models/Modelo'

export default class extends BaseSeeder {
  public async run () {

    await Modelo.createMany([
      {nome: '147', marcaId: 2},
      {nome: 'Palio', marcaId: 2},
      {nome: 'Uno', marcaId: 2},

      {nome: 'Gol', marcaId: 2},
      {nome: 'Virus', marcaId: 2},

      {nome: 'Astra', marcaId: 2},

      {nome: 'Ka', marcaId: 2},
      {nome: 'Ka', marcaId: 2},
      {nome: 'Ka', marcaId: 2},
      {nome: 'Ka', marcaId: 2}
  
    ])
    // Write your database queries inside the run method
  }
}
