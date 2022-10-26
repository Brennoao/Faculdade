import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Fornecedore extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public RazãSocial: number

  @column()
  public CNPJ: number

  @column()
  public CEP: number

  @column()
  public endereço: string

  @column()
  public telefone: number

  @column()
  public celular: number
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
