import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PetValidator {
  constructor(protected ctx: HttpContextContract) { }


  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(100)
    ]),

    cor: schema.string([
      rules.maxLength(45)
    ]),

    racaId: schema.number([
      rules.exists({ table: 'racas', column: 'id' })
    ]),

    tipoId: schema.number([
      rules.exists({ table: 'tipos', column: 'id' })
    ]),
  })

  public messages: CustomMessages = {
    required: 'O campo {{field}} é obrigatório.',
    maxLength: 'Número máximo de caracteres atingido. O {{field}} deve conter {{ options.maxLength }}',
    exists: 'Não existe esse ID na tabela.',    
    number: 'O campo {{field}} é composto apenas por números'
  }
}
