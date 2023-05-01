import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AtendimentoValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    data: schema.date(),
    descricao: schema.string([
      rules.maxLength(100)
    ]),
    petId: schema.number(),
    funcionarioId: schema.number(),
    procedimentoId: schema.number(),
  })

  public messages: CustomMessages = {}
}
