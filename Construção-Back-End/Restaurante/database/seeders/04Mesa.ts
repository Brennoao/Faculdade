import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Mesa from 'App/Models/Mesa'

export default class extends BaseSeeder {
  public async run () {
    await Mesa.createMany([
      {numero: 1, restauranteId: 1},
      {numero: 2, restauranteId: 1},
      {numero: 3, restauranteId: 1},
      {numero: 4, restauranteId: 1},
      {numero: 5, restauranteId: 1}
    ])
    // Write your database queries inside the run method
  }
}
