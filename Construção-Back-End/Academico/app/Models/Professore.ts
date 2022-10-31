import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Turma from './Turma'

export default class Professore extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public cpf: number

  @column()
  public matricula: number

  @column()
  public salario: number

  @column()
  public email: string

  @column()
  public telefone: number

  @column()
  public cep: number

  @column()
  public logradouro: string

  @column()
  public complemento: string

  @column()
  public numero: number

  @column()
  public bairro: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Turma)
  public turmas: HasMany <typeof Turma>
}
