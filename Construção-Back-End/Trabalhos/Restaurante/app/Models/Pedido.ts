import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Funcionario from './Funcionario'
import Mesa from './Mesa'
import Produto from './Produto'
import PedidosProduto from './PedidosProduto'

export default class Pedido extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public mesaId: number

  @column()
  public funcionarioId: number

  @column()
  public data: Date

  @column()
  public formaPagamento: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Funcionario)
  public funcionario: BelongsTo <typeof Funcionario>

  @belongsTo(() => Mesa)
  public mesa: BelongsTo <typeof Mesa>

  @hasMany(() => PedidosProduto)
  public pedidoProdutos: HasMany <typeof PedidosProduto> 

  @manyToMany(() => Produto, {pivotTable: "pedidosProdutos"})
  public produtos: ManyToMany <typeof Produto>
}
