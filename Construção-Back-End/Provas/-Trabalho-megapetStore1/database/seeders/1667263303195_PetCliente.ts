import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import PetCliente from 'App/Models/PetCliente'

export default class extends BaseSeeder {
  public async run () {
    await PetCliente.createMany([
      {petId: 1, clienteId: 1},
      {petId: 2, clienteId: 3},
      {petId: 3, clienteId: 3},
      {petId: 4, clienteId: 2},
      {petId: 5, clienteId: 4}
    ])
  }
}
