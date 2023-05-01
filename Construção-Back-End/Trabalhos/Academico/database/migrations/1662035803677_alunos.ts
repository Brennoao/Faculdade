import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'alunos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 100).notNullable()
      table.integer('matricula', 20).notNullable().unsigned()
      table.integer('cpf', 11).notNullable().unique().unsigned()
      table.string('email', 100)
      table.integer('telefone', 13)
      table.integer('cep')
      table.string('logradouro')
      table.string('complemento')
      table.integer('numero')
      table.string('bairro')

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
