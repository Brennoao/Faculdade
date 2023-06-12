import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProdutoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string(),
    quantidade: schema.number([rules.unsigned()]),
    caloria: schema.number([rules.unsigned()]),
    fornecedoreId: schema.number([rules.unsigned()]),
    valor: schema.number([rules.unsigned()]),
    tipoId: schema.number([rules.unsigned()])
  })

  public messages: CustomMessages = {
    unsigned: "Somente número positivo",
    required: "item obrigatório"
  }
}
