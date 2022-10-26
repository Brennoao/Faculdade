import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'produtos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('fornecedor', 45)
      table.string('tipo', 10)
      table.integer('quantidade', 100).unsigned()
      table.integer('calorias').unsigned()
      table.integer('fornecedor_idfornecedor').references('id').inTable('fornecedores').unsigned().notNullable()
      table.integer('valor').unsigned()
      table.integer('pizzas_idpizzas').references('id').inTable('pizzas').unsigned().notNullable()
      table.integer('salgados_idsalgados').references('id').inTable('salgados').unsigned().notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
