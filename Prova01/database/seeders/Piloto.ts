import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Piloto from 'App/Models/Piloto'

export default class extends BaseSeeder {
  public async run () {
    await Piloto.createMany([
      {nome: "Orion", idade: 26, marca: "Ferrari", motor: 1050, idCorrida: 3},
      {nome: "Renato", idade: 23, marca: "Ford", motor: 1250, idCorrida: 3},
      {nome: "Joao", idade: 24, marca: "Asto-Martin", motor: 1120, idCorrida: 3},
      {nome: "Hugo", idade: 22, marca: "BMW", motor: 1150, idCorrida: 3},
      {nome: "Diogo", idade: 25, marca: "Toyota", motor: 1200, idCorrida: 3},
    ])
  }
}
