import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'clientes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nome', 100).notNullable()
      table.string('cpf',11).notNullable().unique()
      table.string('telefone', 11).notNullable().unique()
      table.string('email', 100).notNullable().unique()
      table.string('cep',8).notNullable()
      table.string('endereco', 100)
      table.string('complemento', 100)
      table.string('numero',100)
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
