'use strict'

const Schema = use('Schema')

class MessagesTableSchema extends Schema {

  up () {
    this.create('messages', (table) => {
      table.increments()
      table.string('kitol');
      table.string('kinek');
      table.string('uzenet');
      table.string('statusz');
      table.timestamps()
    })
  }

  down () {
    this.drop('messages')
  }

}

module.exports = MessagesTableSchema
