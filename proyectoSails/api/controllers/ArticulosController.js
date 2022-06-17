/**
 * ArticulosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    getAllArticulos: async function (req, res){
        var misArticulos = await Articulos.find();
        res.ok(misArticulos);
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

        var resArticulos = await Articulos.create(params).fetch();
        return res.ok(resArticulos);
    },

    put:async function(req, res){
        var params = req.allParams();
        var id = params.id;
        delete params.id;

        var resArticulos = await Articulos.update({id: id}, params).fetch();
        return res.ok(resArticulos);
    },

    delete: async function(req,res){
        var id= req.param('id');
        var resArticulos = await Articulos.destroy({id:id}).fetch();
        return res.ok(resArticulos);
    }

};

