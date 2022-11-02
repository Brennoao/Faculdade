import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Produtos extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column() 
  public nome: string

  @column()
  public quantidade: number

  @column()
  public calorias: number

  @column()
  public fornecedorIdfornecedor: number

  @column()
  public valor: number

  @column()
  public tipoIdtipo: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
