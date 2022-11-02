import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import PedidosHasProduto from 'App/Models/PedidosHasProduto'

export default class extends BaseSeeder {
  public async run () {
    await PedidosHasProduto.createMany([
      {pedidoIdpedido: 1, produtoIdproduto: 1, quantidade:1, valor: 10},
      {pedidoIdpedido: 2, produtoIdproduto: 2, quantidade:1, valor: 10},
      {pedidoIdpedido: 3, produtoIdproduto: 3, quantidade:1, valor: 10},
      {pedidoIdpedido: 4, produtoIdproduto: 4, quantidade:1, valor: 10},
      {pedidoIdpedido: 5, produtoIdproduto: 5, quantidade:1, valor: 10}
    ])

    // Write your database queries inside the run method
  }
}
