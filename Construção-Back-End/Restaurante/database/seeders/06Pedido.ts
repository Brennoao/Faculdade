import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Pedido from 'App/Models/Pedido'

export default class extends BaseSeeder {
  public async run () {
    await Pedido.createMany([
      {mesaIdmesa: 1, funcionariosIdfuncionarios: 1, data: new Date(2022_06_20), formaPagamento: "Credito"},
      {mesaIdmesa: 2, funcionariosIdfuncionarios: 2, data: new Date(2022_06_20), formaPagamento: "Debito"},
      {mesaIdmesa: 3, funcionariosIdfuncionarios: 3, data: new Date(2022_06_20), formaPagamento: "Pix"},
      {mesaIdmesa: 4, funcionariosIdfuncionarios: 4, data: new Date(2022_06_20), formaPagamento: "Credito"},
      {mesaIdmesa: 5, funcionariosIdfuncionarios: 5, data: new Date(2022_06_20), formaPagamento: "Debito"}
    ])
  }
}
