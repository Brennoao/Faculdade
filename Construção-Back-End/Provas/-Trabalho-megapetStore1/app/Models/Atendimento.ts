import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Procedimento from './Procedimento'
import Pet from './Pet'
import Funcionario from './Funcionario'

export default class Atendimento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public data: DateTime

  @column()
  public descricao: string

  @column()
  public petId: number

  @column()
  public funcionarioId: number

  @column()
  public procedimentoId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo( ()=> Procedimento)
  public procedimentos: BelongsTo<typeof Procedimento>

  @belongsTo( ()=> Pet)
  public pet: BelongsTo<typeof Pet>

  @belongsTo( ()=> Funcionario)
  public funcionario: BelongsTo<typeof Funcionario>
}
