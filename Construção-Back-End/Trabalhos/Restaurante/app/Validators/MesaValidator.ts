import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MesaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    numero: schema.number([rules.unique({table: 'mesas', column: 'numero'}), rules.unsigned()]),
    restauranteId: schema.number([rules.unsigned()])
  })

  public messages: CustomMessages = {
    unique: "Numero já consta no Banco de dados",
    unsigned: "Somente número positivo",
    required: "item obrigatório"
  }
}
