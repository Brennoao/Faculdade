import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
      email: schema.string([rules.email(), rules.unique({table: "users", column: "email"})]),
      password: schema.string([rules.minLength(10)])
  })

  public messages: CustomMessages = {
    "email.unique": "email já existente",
    minLength: "Mínimo de letras permitida e de 10 caracteres",
    required: "item obrigatório"
  }
}
