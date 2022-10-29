import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProfessoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([rules.maxLength(100)]),
    cpf: schema.number([rules.unique({table: 'professores', column: 'cpf'}), rules.unsigned()]),
    matricula: schema.number([rules.unique({table: 'professore', column: 'matricula'}), rules.unsigned()]),
    salario: schema.number([rules.unsigned()]),
    email: schema.string([rules.maxLength(100), rules.email()]),
    telefone: schema.number([rules.unsigned(), rules.unique({table: 'professore', column: 'telefone'})]),
    cep: schema.number.optional(),
    logradouro: schema.string.optional([rules.maxLength(100)]),
    complemento: schema.string.optional([rules.maxLength(100)]),
    numero: schema.string.optional([rules.maxLength(20)]),
    bairro: schema.string.optional([rules.maxLength(100)])
  })

  public messages: CustomMessages = {}
}
