import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PedidoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    mesaId: schema.number([rules.unsigned()]),
    funcionarioId: schema.number([rules.unsigned()]),
    data: schema.date(),
    formaPagamento: schema.string()
  })

  public messages: CustomMessages = {
    unsigned: "Somente número positivo",
    required: "item obrigatório"
  }
}
