
const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");

// logic for getting the patients data

router.route("/")
    .get((req,res)=>{
        Patient.find()
                .then(patient=>res.json(patient))
                .catch((err=>res.status(400).json(`Error: ${err}`)))
});

// adding the new patient

router.route("/add")
    .post((req,res)=>{
        const {name, gender, age}=req.body;
        const newpatient= new Patient({name, gender, age});
        newpatient.save()
            .then((patientname)=>res.json(patientname))
            .catch(err=>res.status(400).json(`Error: ${err}`));
});

// updating the patient

router.route("/update/:id")
    .post((req,res)=>{
        Patient.findById(req.params.id)
            .then(patient=>{
                if(!patient){
                    return res.status(404).json(`Patient not found`)
                }
                patient.name=req.body.name
                patient.gender=req.body.gender
                patient.age=req.body.age
                patient.save()
                    .then(()=>res.json("patient updated"))
                    .catch((err)=>res.status(400).json(`Error: ${err}`))
            })
            .catch((err)=>res.status(400).json(`Error: ${err}`));
    })

// delete the patient

router.route("/delete/:id")
    delete((req,res)=>{
        Patient.findByIdAndDelete(req.params.id)
            .then((patient)=>{
                if(!patient){
                    return res.status(404).json(`Invalid patient Id`)
                }
                res.json("Patient Deleted")
            })
            .catch((err)=>res.status(400).json(`Error: ${err}`));
    });

module.exports = router;