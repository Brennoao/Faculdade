import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import PedidosProduto from 'App/Models/PedidosProduto'

export default class extends BaseSeeder {
  public async run () {
    await PedidosProduto.createMany([
      {pedidoId: 1, produtosId: 1, quantidade:1, valor: 10},
      {pedidoId: 2, produtosId: 2, quantidade:1, valor: 10},
      {pedidoId: 3, produtosId: 3, quantidade:1, valor: 10},
      {pedidoId: 4, produtosId: 4, quantidade:1, valor: 10},
      {pedidoId: 5, produtosId: 5, quantidade:1, valor: 10}
    ])

    // Write your database queries inside the run method
  }
}
