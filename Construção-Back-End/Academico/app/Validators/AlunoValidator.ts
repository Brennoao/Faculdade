import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AlunoValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    nome: schema.string([rules.maxLength(100), rules.unique({table: 'alunos', column: 'nome'})]),
    cpf: schema.number([rules.unsigned(), rules.unique({table: 'alunos', column: 'cpf'})]),
    matricula: schema.number([rules.unsigned(), rules.unique({table: 'alunos', column: 'matricula'})]),
    email: schema.string.optional([rules.email(), rules.maxLength(100)]),
    telefone: schema.string.optional([rules.mobile(), rules.minLength(13)]),
    cep: schema.number.optional(),
    logradouro: schema.string.optional(),
    complemento: schema.string.optional(),
    numero: schema.string.optional(),
    bairro: schema.string.optional()
  })

  public messages: CustomMessages = {
    
  }
}
