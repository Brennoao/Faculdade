import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Atendimento from './Atendimento'

export default class Procedimento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public valor: number

  @column()
  public nome: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany( ()=>Atendimento ) 
  public atendimentos: HasMany<typeof Atendimento>
}
