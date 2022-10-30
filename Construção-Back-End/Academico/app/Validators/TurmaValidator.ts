import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TurmaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([rules.maxLength(50)]),
    professorId: schema.number([rules.unsigned()]),
    semestreId: schema.number([rules.unsigned()]),
    disciplinaId: schema.number([rules.unsigned()]),
    salaId: schema.number([rules.unsigned()]),
    turno: schema.string([rules.maxLength(1)])
  })

  public messages: CustomMessages = {}
}
