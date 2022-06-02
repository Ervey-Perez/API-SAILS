/**
 * Usuarios.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre: { type: 'string', required: true},
    apellidos: { type: 'string', allowNull: false},
    edad: { type: 'number', required: true},

  },

};

