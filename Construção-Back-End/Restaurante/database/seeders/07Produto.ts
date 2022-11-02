import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Produtos from 'App/Models/Produtos'

export default class extends BaseSeeder {
  public async run () {
    await Produtos.createMany([
      {nome: "Fanta-Laranja", quantidade: 1, calorias: 500, fornecedorIdfornecedor: 2, valor: 10, tipoIdtipo: 6},
      {nome: "Coca-Cola", quantidade: 1, calorias: 500, fornecedorIdfornecedor: 1, valor: 10, tipoIdtipo: 6},
      {nome: "Sprite", quantidade: 1, calorias: 500, fornecedorIdfornecedor: 3, valor: 10, tipoIdtipo: 6},
      {nome: "Fanta-Uva", quantidade: 1, calorias: 500, fornecedorIdfornecedor: 4, valor: 10, tipoIdtipo: 6},
      {nome: "Suco-Laranja", quantidade: 1, calorias: 500, fornecedorIdfornecedor: 5, valor: 10, tipoIdtipo: 5}
    ])
    // Write your database queries inside the run method
  }
}
