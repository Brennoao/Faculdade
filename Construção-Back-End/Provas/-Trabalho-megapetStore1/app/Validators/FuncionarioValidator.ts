import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FuncionarioValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(100)
    ]),
    cpf: schema.string([
      rules.maxLength(11),
      rules.minLength(11),
      rules.unique({ table: 'funcionarios', column: 'cpf' }),
      rules.regex(new RegExp('^[0-9]*$')),
    ]),
    telefone: schema.string([
      rules.maxLength(11),
      rules.minLength(11),
      rules.unique({ table: 'funcionarios', column: 'telefone' }),
      rules.regex(new RegExp('^[0-9]*$')),
    ]),
    email: schema.string([
      rules.maxLength(100),
      rules.unique({ table: 'funcionarios', column: 'email' }),
      rules.email()
    ]),
    cep: schema.string([
      rules.maxLength(8),
      rules.minLength(8),
      rules.regex(new RegExp('^[0-9]*$')),
    ]),
    endereco: schema.string([
      rules.maxLength(100),
    ]),
    complemento: schema.string.optional([
      rules.maxLength(100),
    ]),
    numero: schema.string.optional([
      rules.maxLength(100),
      rules.regex(new RegExp('^[0-9]*$'))
    ]),
  })

  public messages: CustomMessages = {
    required: 'O campo {{field}} é obrigatório.',
    maxLength: 'Número máximo de caracteres atingido. O {{field}} deve conter {{ options.maxLength }}',
    minLength: 'Número mínimo de caracteres não atingido. O {{field}} deve conter {{ options.minLength }}',
    regex: 'O campo {{field}} deve conter apenas números.',
    unique: 'O {{field}} já cadastrado.',
  }
}
