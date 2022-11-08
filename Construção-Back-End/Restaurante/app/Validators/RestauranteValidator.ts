import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RestauranteValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    cnpj: schema.number([rules.unique({table: 'restaurante', column: 'cnpj'}), rules.unsigned()])
  })

  public messages: CustomMessages = {}
}
