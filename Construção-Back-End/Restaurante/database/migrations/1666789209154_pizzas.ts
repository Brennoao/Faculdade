import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'pizzas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('frango_catupiry').unsigned()
      table.integer('frango_bacon').unsigned()
      table.integer('portuguesa').unsigned()
      table.integer('moda_casa').unsigned()
      table.integer('banana_chocolate').unsigned()
      table.integer('brigadeiro').unsigned()

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
