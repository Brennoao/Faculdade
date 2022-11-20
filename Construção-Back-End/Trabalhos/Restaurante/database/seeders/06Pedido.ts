import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Pedido from 'App/Models/Pedido'

export default class extends BaseSeeder {
  public async run () {
    await Pedido.createMany([
      {mesaId: 1, funcionarioId: 1, data: new Date(2022_06_20), formaPagamento: "Credito"},
      {mesaId: 2, funcionarioId: 2, data: new Date(2022_06_20), formaPagamento: "Debito"},
      {mesaId: 3, funcionarioId: 3, data: new Date(2022_06_20), formaPagamento: "Pix"},
      {mesaId: 4, funcionarioId: 4, data: new Date(2022_06_20), formaPagamento: "Credito"},
      {mesaId: 5, funcionarioId: 5, data: new Date(2022_06_20), formaPagamento: "Debito"}
    ])
  }
}
