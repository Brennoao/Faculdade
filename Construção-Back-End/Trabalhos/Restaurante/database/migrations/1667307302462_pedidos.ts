import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'pedidos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('mesa_id').references('id').inTable('mesas').notNullable().unsigned().onDelete('CASCADE')
      table.integer('funcionario_id').references('id').inTable('funcionarios').notNullable().unsigned().onDelete('CASCADE')
      table.date('data')
      table.string('forma_pagamento').notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
