import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
      email: schema.string([rules.email(), rules.unique]),
      password: schema.string([rules.minLength(10)])
  })

  public messages: CustomMessages = {}
}
