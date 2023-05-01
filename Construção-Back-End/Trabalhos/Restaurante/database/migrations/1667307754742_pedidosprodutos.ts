import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'pedidosprodutos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('pedido_id').references('id').inTable('pedidos').notNullable().unsigned()
      table.integer('produtos_id').references('id').inTable('produtos').notNullable().unsigned()
      table.integer('quantidade').notNullable().unsigned()
      table.integer('valor').notNullable().unsigned()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
