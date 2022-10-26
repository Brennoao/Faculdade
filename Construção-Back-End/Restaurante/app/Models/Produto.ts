import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public fornecedor: string

  @column()
  public tipo: string

  @column()
  public quantidade: number

  @column()
  public calorias: number

  @column()
  public fornecedorIdfornecedor: Number

  @column()
  public valor: number

  @column()
  public pizzasIdpizzas: number

  @column()
  public salgadosIdsalgados: Number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
