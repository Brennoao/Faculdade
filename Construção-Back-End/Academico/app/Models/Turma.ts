import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Aluno from './Aluno'

export default class Turma extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public professorId: number

  @column()
  public semestreId: number

  @column()
  public disciplinaId: number

  @column()
  public salaId: number

  @column()
  public turno: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Aluno)
  Alunos: ManyToMany <typeof Aluno>
  
}
