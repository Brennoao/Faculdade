import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'fornecedores'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('razao_social').notNullable().unique()
      table.integer('cnpj', 14).notNullable().unsigned().unique()
      table.integer('cep').unsigned()
      table.string('endereco')
      table.integer('telefone').unsigned().unique().notNullable()
      table.integer('celular').unsigned().unique().notNullable()
      table.integer('restaurante_id').references('id').inTable('restaurantes').notNullable().unsigned().onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
