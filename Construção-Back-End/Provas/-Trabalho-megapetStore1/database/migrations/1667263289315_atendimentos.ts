import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'atendimentos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.timestamp('data').notNullable()
      table.string('descricao', 200).notNullable()
      table.integer('pet_id').references('id').inTable('pets').notNullable().unsigned()
      table.integer('funcionario_id').references('id').inTable('funcionarios').notNullable().unsigned()
      table.integer('procedimento_id').references('id').inTable('procedimentos').notNullable().unsigned()

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
