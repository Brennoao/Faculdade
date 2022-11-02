import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FornecedoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    razaoSocial: schema.string([rules.unique({table: 'fornecedores', column: 'razao_social'})]),
    cnpj: schema.number([rules.unique({table: 'fornecedores', column: 'cnpj'}), rules.unsigned()]),
    cep: schema.number([rules.unsigned()]),
    endereco: schema.string.optional(),
    telefone: schema.number([rules.unique({table: 'fornecedores', column: 'telefone'}), rules.unsigned()]),
    celular: schema.number([rules.unique({table: 'fornecedores', column: 'celular'}), rules.unsigned()])
  })

  public messages: CustomMessages = {}
}
