import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'produtos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome').notNullable()
      table.integer('quantidade').notNullable().unsigned()
      table.integer('caloria').notNullable().unsigned()
      table.integer('fornecedore_id').references('id').inTable('fornecedores').notNullable().unsigned().onDelete('CASCADE')
      table.integer('valor').notNullable().unsigned()
      table.integer('tipo_id').references('id').inTable('tipos').notNullable().unsigned().onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
