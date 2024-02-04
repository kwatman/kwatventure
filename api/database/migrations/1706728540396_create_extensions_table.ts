import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'extensions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.string('name')
      table.boolean('activated')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
