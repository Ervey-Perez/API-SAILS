/**
 * UsuariosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

//const Usuarios = require("../models/Usuarios");

module.exports = {
  
    getAllUsers: async function (req, res){
        var misUsuarios = await Usuarios.find();        
        // var misUsuarios = await Usuarios.find();
        res.ok(misUsuarios);
    },

    post: async function(req, res){
        var params = req.allParams();
        //hacemos validaciones
        if(!params.nombre)
        return req.badRequest('El nombre es necesario');

        //Hacer la insercion y traer de vuelta lo que incertaste
        //todo proceso a bd es asincrono y hay que esperarlo con await

        /*el fetch tiene dos propositos, traer y actualizar y el segundo es respetar el ciclo de vida de un registro

        Si no tienes fecht no tienes un valor devuelto y el ciclo de vida del modelo no funciona

        */

        var resUsers = await Usuarios.create(params).fetch();
        return res.ok(resUsers);
    },

    put:async function(req, res){
        var params = req.allParams();
        var id = params.id;
        delete params.id;

        var resUsers = await Usuarios.update({id: id}, params).fetch();
        return res.ok(resUsers);
    },

    delete: async function(req,res){
        var id= req.param('id');
        var resUsers = await Usuarios.destroy({id:id}).fetch();
        return res.ok(resUsers);
    }

};

