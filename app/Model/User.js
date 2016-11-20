'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

    static get rules () {
        return {
            email: 'required|email|unique:users',
            password: 'required',
        }        
} 

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

}

module.exports = User
