/**
 * Articulos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre: { type: 'string', required: true},
    precio: { type: 'number', allowNull: false},
    descripcion: { type: 'string', required: true},

  },

};

