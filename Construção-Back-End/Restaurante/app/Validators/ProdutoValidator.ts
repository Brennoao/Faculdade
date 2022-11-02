import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProdutoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string(),
    quantidade: schema.number([rules.unsigned()]),
    calorias: schema.number([rules.unsigned()]),
    fornecedorIdfornecedor: schema.number([rules.unsigned()]),
    valor: schema.number([rules.unsigned()]),
    tipoIdtipo: schema.number([rules.unsigned()])
  })

  public messages: CustomMessages = {}
}
