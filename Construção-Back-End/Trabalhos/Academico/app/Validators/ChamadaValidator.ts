import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ChamadaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    aulaId: schema.number(),
    alunosId: schema.number(),
    presenca: schema.string()
  })

  public messages: CustomMessages = {}
}
