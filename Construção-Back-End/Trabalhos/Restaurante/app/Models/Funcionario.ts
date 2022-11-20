import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Restaurante from './Restaurante'
import Pedido from './Pedido'

export default class Funcionario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public cpf: number

  @column()
  public registroGeral: number

  @column()
  public email: string

  @column()
  public cargo: string

  @column()
  public senha: string

  @column()
  public restauranteId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Restaurante)
  public restaurante: BelongsTo <typeof Restaurante>

  @hasMany(() => Pedido)
  public pedido: HasMany <typeof Pedido>
}
