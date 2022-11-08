import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Produtos from 'App/Models/Produto'

export default class extends BaseSeeder {
  public async run () {
    await Produtos.createMany([
      {nome: "Fanta-Laranja", quantidade: 1, caloria: 500, fornecedorId: 2, valor: 10, tipoId: 6},
      {nome: "Coca-Cola", quantidade: 1, caloria: 500, fornecedorId: 1, valor: 10, tipoId: 6},
      {nome: "Sprite", quantidade: 1, caloria: 500, fornecedorId: 3, valor: 10, tipoId: 6},
      {nome: "Fanta-Uva", quantidade: 1, caloria: 500, fornecedorId: 4, valor: 10, tipoId: 6},
      {nome: "Suco-Laranja", quantidade: 1, caloria: 500, fornecedorId: 5, valor: 10, tipoId: 5}
    ])
    // Write your database queries inside the run method
  }
}
