import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FornecedoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    razaoSocial: schema.string([rules.unique({table: 'fornecedore', column: 'razao_social'})]),
    cnpj: schema.number([rules.unsigned(), rules.unique({table: 'fornecedore', column: 'cnpj'})]),
    cep: schema.number([rules.unsigned()]),
    endereco: schema.string.optional(),
    telefone: schema.number([rules.unique({table: 'fornecedore', column: 'telefone'}), rules.unsigned()]),
    celular: schema.number([rules.unique({table: 'fornecedore', column: 'celular'}), rules.unsigned()]),
    restauranteId: schema.number([rules.unsigned()])
  })

  public messages: CustomMessages = {
    "razaoSocial.unique": "Razao Social já existente",
    "cnpj.unique": "CNPJ já existente",
    "telefone.unique": "Telefone já existente",
    "celular.unique": "Celular já existente",
    unsigned: "Somente números permitidos",
    required: "item obrigatório"
  }
}
