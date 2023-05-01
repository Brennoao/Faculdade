import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TipoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([rules.unique({table: 'tipos', column: 'nome'})])
  })

  public messages: CustomMessages = {
    required: "item obrigatório",
    unique: "Tipo já existente"
  }
}
