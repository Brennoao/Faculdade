import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FuncionarioValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string(),
    cpf: schema.number([rules.unique({table: 'funcionarios', column: 'cpf'}), rules.unsigned()]),
    registroGeral: schema.number(),
    email: schema.string([rules.unique({table: 'funcionarios', column: 'email'}), rules.email()]),
    cargo: schema.string(),
    senha: schema.string(),
    restauranteId: schema.number.optional([rules.unsigned()])
  })

  public messages: CustomMessages = {
    "cpf.unique": "CPF já existente",
    "email.unique": "email já existente",
    unsigned: "Somente números positivos",
    email: "Somente email permitidos neste campo",
    required: "item obrigatório"
  }
}
