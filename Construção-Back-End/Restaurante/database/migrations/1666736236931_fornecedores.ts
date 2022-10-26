import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'fornecedores'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('razão_social', 45).notNullable().unique()
      table.integer('cnpj', 14).notNullable().unique().unsigned()
      table.integer('cep', 14).unsigned()
      table.string('endereço', 45).notNullable()
      table.integer('telefone').notNullable()
      table.integer('celular').notNullable()

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
