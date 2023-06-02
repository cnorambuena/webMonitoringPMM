var Details = require('../models/details');

var controller = {
        
    getAll: (req,res)=>{
        Details.find({}).exec((err,details)=>{
        if (err) {
            return res.status(500).send({
            status:'error',
            message:'Error al devolver los datos'
            });
        }
        if (!details) {
            return res.status(404).send({
            status:'error',
            message:'No hay datos para mostrar'
            });
        }
        return res.status(200).send({
            status:'success',
            details
        });

        });
    }
}
    
    module.exports = controller;