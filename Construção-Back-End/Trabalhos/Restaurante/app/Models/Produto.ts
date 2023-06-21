import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Fornecedore from './Fornecedore'
import Tipo from './Tipo'
import Pedido from './Pedido'
import PedidosProduto from './PedidosProduto'

export default class Produtos extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column() 
  public nome: string

  @column()
  public quantidade: number

  @column()
  public caloria: number

  @column()
  public fornecedoreId: number

  @column()
  public valor: number

  @column()
  public tipoId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Fornecedore)
  public fornecedor: BelongsTo <typeof Fornecedore>

  @belongsTo(() => Tipo)
  public tipo: BelongsTo <typeof Tipo>

  @hasMany(() => PedidosProduto)
  public pedidoProdutos: HasMany <typeof PedidosProduto> 

  @manyToMany(() => Pedido, {pivotTable: "pedidos_produtos"})
  public pedido: ManyToMany <typeof Pedido>
}
