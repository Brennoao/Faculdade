import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Pet from './Pet'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public cpf: string    

  @column()
  public telefone: string

  @column()
  public email: string

  @column()
  public cep: string

  @column()
  public endereco: string

  @column()
  public complemento: string

  @column()
  public numero: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(()=>Pet, {pivotTable: 'pet_clientes'})
  public pets: ManyToMany<typeof Pet>

}
