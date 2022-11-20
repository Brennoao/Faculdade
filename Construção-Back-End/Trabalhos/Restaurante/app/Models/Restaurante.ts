import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Mesa from './Mesa'
import Funcionario from './Funcionario'
import Fornecedore from './Fornecedore'

export default class Restaurante extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cnpj: number

  @column()
  public inscricaoEstadual: number

  @column()
  public razaoSocial: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Mesa)
  public mesa: HasMany <typeof Mesa>

  @hasMany(() => Funcionario)
  public funcionario: HasMany <typeof Funcionario>

  @hasMany(() => Fornecedore)
  public fornecedore: HasMany <typeof Fornecedore>
}
