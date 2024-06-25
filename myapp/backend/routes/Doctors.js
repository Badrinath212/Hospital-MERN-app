
const express = require("express");
const router = express.Router();
const Doctor = require("../models/Doctor");

// getting the doctors data

router.route("/")
    .get((req,res)=>{
        Doctor.find()
            .then((doctor)=>res.json(doctor))
            .catch(err=>res.status(404).json(`Error: ${err}`))
    });

// adding the doctor

router.route("/add")
    .post((req,res)=>{
        const {name, speciality} = req.body;
        const newDoctor = new Doctor({name, speciality})
        newDoctor.save()
            .then(doctor=>res.json(doctor))
            .catch((err)=>res.status(400).json(`Error: ${err}`))
    });

// update the doctor

router.post("/update/:id", async (req, res) => {
    try {
      const doctor = await Doctor.findById(req.params.id);
  
      if (!doctor) {
        return res.status(404).json({ error: 'Doctor Not Found' });
      }
  
      const { name, speciality } = req.body;
      doctor.name = name;
      doctor.speciality = speciality;
  
      const updatedDoctor = await doctor.save();
      res.json(updatedDoctor);
    } catch (err) {
      res.status(400).json({ error: `Error: ${err.message}` });
    }
  });

// delete the doctor

router.delete("/delete/:id", async (req,res)=>{
    try{
        const doctor= await Doctor.findByIdAndDelete(req.params.id);
        if (!doctor){
            return res.status(400).json({error: "Doctor not Found"})
        }
        res.json(doctor);
    }
    catch (err) {
        res.status(400).json({error : `Error ${err}`})
    }
})

module.exports= router;