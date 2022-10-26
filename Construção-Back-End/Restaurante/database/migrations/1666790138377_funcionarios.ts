import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'funcionarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 100).notNullable()
      table.integer('cpf', 11).notNullable().unsigned().unique()
      table.integer('registro_geral', 7).notNullable().unsigned().unique()
      table.string('email', 100).notNullable().unique()
      table.string('cargo', 45).notNullable()
      table.string('senha', 100).notNullable()
      table.integer('restaurante_idrestaurante').references('id').inTable('funcionarios').unsigned().notNullable()

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
