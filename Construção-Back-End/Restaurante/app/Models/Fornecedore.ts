import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Produto from './Produto'
import Restaurante from './Restaurante'

export default class Fornecedore extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public razaoSocial: string

  @column()
  public cnpj: number

  @column()
  public cep: number

  @column()
  public endereco: string

  @column()
  public telefone: number

  @column()
  public celular: number

  @column()
  public restauranteId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Produto)
  public produto: HasMany <typeof Produto>

  @belongsTo(() => Restaurante)
  public restaurante: BelongsTo <typeof Restaurante>
}
