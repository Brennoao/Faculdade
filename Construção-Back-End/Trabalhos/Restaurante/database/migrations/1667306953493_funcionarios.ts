import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'funcionarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome').notNullable()
      table.integer('cpf', 11).notNullable().unsigned().unique()
      table.integer('registro_geral', 7).notNullable()
      table.string('email').notNullable().unique()
      table.string('cargo').notNullable()
      table.string('senha').notNullable()
      table.integer('restaurante_id').references('id').inTable('restaurantes').notNullable().unsigned()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
