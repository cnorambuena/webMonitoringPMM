//'use strict'

var Alarm = require('../models/alarm');

var controller = {
    getAll: (req,res)=>{
        Alarm.find({}).exec((err,alarms)=>{
        if (err) {
            return res.status(500).send({
            status:'error',
            message:'Error al devolver los datos'
            });
        }
        if (!alarms) {
            return res.status(404).send({
            status:'error',
            message:'No hay datos para mostrar'
            });
        }
        return res.status(200).send({
            status:'success',
            alarms
        });

        });
    },
    getAlarm: (req,res)=>{
        var id_alarm = req.params.id;
        if (!id_alarm || id_alarm == null) {
          return res.status(404).send({
            status:'error',
            message:'No existe el id'
          });
        }
        Alarm.findOne({_nombre:id_alarm},(err,alarm)=>{
          if (err) {
            return res.status(404).send({
              status:'error',
              message:'No existe el Alumno'
            });
          }
          return res.status(200).send({
            status:'success',
            alarm
          });
        });
      }
    }
    
    module.exports = controller;