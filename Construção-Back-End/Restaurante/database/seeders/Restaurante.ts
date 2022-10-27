import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Restaurante from 'App/Models/Restaurante'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Restaurante.createMany([
      {cnpj: 1234567891011121314},
      {cnpj: 0o02535124544466}
    ])
  }
}
