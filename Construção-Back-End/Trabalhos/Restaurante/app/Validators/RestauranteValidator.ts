import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RestauranteValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    cnpj: schema.number([rules.unique({table: 'restaurantes', column: 'cnpj'}), rules.unsigned()]),
    inscricaoEstdual: schema.number([rules.unsigned(), rules.unique({table: 'restaurantes', column: 'inscricao_estadual'})]),
    razaoSocial: schema.string([rules.unique({table: 'restaurantes', column: 'razaoEstadual'})])
  })

  public messages: CustomMessages = {
    "cnpj.unique": "CNPJ já existente",
    "inscricao_estadual.unique": "inscricao Estadual já existente",
    "razaoEstadual.unique": "Razao Estadual já existente",
    unsigned: "Somente número positivo",
    required: "item obrigatório"
  }
}
