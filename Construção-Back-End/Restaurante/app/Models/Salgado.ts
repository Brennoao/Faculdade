import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Salgado extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public salgadoSalsicha: number

  @column()
  public salgadoCoxinha: number

  @column()
  public pastelao: number

  @column()
  public type: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
