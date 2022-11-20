import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class CarroCliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public carrosId: number

  @column()
  public clienteId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
