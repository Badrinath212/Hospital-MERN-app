
const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointments");

// getting the doctors data

router.route("/")
    .get((req,res)=>{
        Appointment.find()
            .then((appointment)=>res.json(appointment))
            .catch(err=>res.status(404).json(`Error: ${err}`))
    });

// adding the doctor

router.route("/add")
    .post((req,res)=>{
        const {patientName, doctorName, date} = req.body;
        const newAppointment = new Appointment({patientName, doctorName, date})
        newAppointment.save()
            .then(appointment=>res.json(appointment))
            .catch((err)=>res.status(400).json(`Error: ${err}`))
    });

// update the doctor

router.route("/update/:id")
    .post((req,res)=>{
        Appointment.findById(req.params.id)
            .then((appointment)=>{
                if(!appointment){
                    return res.status(404).json(`Not Found`);
                }
                appointment.patientName=req.patientName
                appointment.doctorName=req.doctorName
                appointment.date=req.date
                appointment.save()
                    .then(()=>res.json(appointment))
                    .catch((err)=>res.status(400).json(`Error: ${err}`))
            })
            .catch((err)=>res.status(400).json(`Error: ${err}`))
    });

// delete the doctor

router.route("/delete/:id")
    .delete((req,res)=>{
        Appointment.findByIdAndDelete(req.params.id)
            .then((appointment)=>{
                if(!appointment){
                    return res.status(404).json(`Not Found`);
                }
                res.json("Deleted")})
            .catch((err)=>res.status(400).json(`Error: ${err}`))
    });

module.exports=router;