import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CursoValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    nome: schema.string([rules.maxLength(50), rules.unique({table: 'cursos', column: 'nome'})]),
    duracao: schema.number.optional([rules.unsigned()]),
    modalidade: schema.string([rules.maxLength(1), rules.unique({table: 'cursos', column: 'modalidade'})]),
  })

  public messages: CustomMessages = {}
}
