import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import PedidosHasProduto from 'App/Models/PedidosHasProduto'

export default class extends BaseSeeder {
  public async run () {
    await PedidosHasProduto.createMany([
      {pedidoId: 1, produtoId: 1, quantidade:1, valor: 10},
      {pedidoId: 2, produtoId: 2, quantidade:1, valor: 10},
      {pedidoId: 3, produtoId: 3, quantidade:1, valor: 10},
      {pedidoId: 4, produtoId: 4, quantidade:1, valor: 10},
      {pedidoId: 5, produtoId: 5, quantidade:1, valor: 10}
    ])

    // Write your database queries inside the run method
  }
}
