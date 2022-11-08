import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FuncionarioValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string(),
    cpf: schema.number([rules.unique({table: 'funcionario', column: 'cpf'}), rules.unsigned(), rules.range(0, 9)]),
    registroGeral: schema.number(),
    email: schema.string([rules.unique({table: 'funcionario', column: 'email'}), rules.email()]),
    cargo: schema.string(),
    senha: schema.string(),
    restauranteId: schema.number.optional([rules.unsigned()])
  })

  public messages: CustomMessages = {}
}
