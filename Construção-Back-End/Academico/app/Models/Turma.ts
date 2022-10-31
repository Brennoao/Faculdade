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
  public professoreId: number

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
  public salas: BelongsTo <typeof Sala>

  @belongsTo(() => Semestre)
  public semestres: BelongsTo <typeof Semestre>

  @belongsTo(() => Professore)
  public professores: BelongsTo <typeof Professore>

  @belongsTo(() => Disciplina)
  public disciplinas: BelongsTo <typeof Disciplina>

  @hasMany(() => Aula)
  public aulas: HasMany <typeof Aula>

  @manyToMany(() => Aluno, {pivotTable: 'turma_alunos'})
  public alunos: ManyToMany <typeof Aluno>

  
}
