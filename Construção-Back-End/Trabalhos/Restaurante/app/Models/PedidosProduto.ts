import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Produto from './Produto'
import Pedido from './Pedido'

export default class PedidosProduto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public pedidoId: number
  
  @column()
  public produtosId: number

  @column()
  public quantidade: number

  @column()
  public valor: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Produto)
  public produto: BelongsTo <typeof Produto>

  @belongsTo(() => Pedido)
  public pedido: BelongsTo <typeof Pedido>
}
