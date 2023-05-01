import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Raca from './Raca'
import Tipo from './Tipo'
import Cliente from './Cliente'
import Atendimento from './Atendimento'

export default class Pet extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public cor: string

  @column()
  public racaId: number

  @column()
  public tipoId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo( ()=> Raca)
  public raca: BelongsTo<typeof Raca>

  @belongsTo( ()=> Tipo)
  public tipo: BelongsTo<typeof Tipo>

  @hasMany( ()=>Atendimento) 
  public atendimentos: HasMany<typeof Atendimento>

  @manyToMany(()=>Cliente, {pivotTable: 'pet_clientes'})
  public cliente: ManyToMany<typeof Cliente>
  
}
