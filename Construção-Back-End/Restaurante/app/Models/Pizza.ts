import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Pizza extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public frangoCatupiry: number

  @column()
  public frangoBacon: number

  @column()
  public portuguesa: number

  @column()
  public modaCasa: number

  @column()
  public bananaChocolate: number

  @column()
  public brigadeiro: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
