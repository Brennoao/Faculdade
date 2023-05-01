import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PedidosProdutoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    pedidoId: schema.number([rules.unsigned()]),
    produtosId: schema.number([rules.unsigned()]),
    quantidade: schema.number([rules.unsigned()]),
    valor: schema.number([rules.unsigned()])
  })

  public messages: CustomMessages = {
    unsigned: "Somente número positivo",
    required: "item obrigatório"
  }
}
