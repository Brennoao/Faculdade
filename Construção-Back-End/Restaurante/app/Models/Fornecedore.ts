import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

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

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
