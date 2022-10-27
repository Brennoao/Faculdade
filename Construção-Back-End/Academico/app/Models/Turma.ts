import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany, ManyToMany, manyToMany} from '@ioc:Adonis/Lucid/Orm'
import Aluno from './Aluno'
import Sala from './Sala'
import Semestre from './Semestre'
import Professore from './Professore'
import Disciplina from './Disciplina'
import Aula from './Aula'

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

  @belongsTo(() => Sala)
  public Alunos: BelongsTo <typeof Sala>

  @belongsTo(() => Semestre)
  public Semestre: BelongsTo <typeof Semestre>

  @belongsTo(() => Professore)
  public Professore: BelongsTo <typeof Professore>

  @belongsTo(() => Disciplina)
  public Disciplina: BelongsTo <typeof Disciplina>

  @hasMany(() => Aula)
  public Aula: HasMany <typeof Aula>

  @manyToMany(() => Aluno, {pivotTable: 'turma_aluno'})
  public Aluno: ManyToMany <typeof Aluno>

  
}
