
const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const patientSchema=new Schema({
    patientName: {type: String, required: true},
    gender: {type: String, required: true},
    age: {type: Number, required: true}
});

const Patient=mongoose.model("Patient",patientSchema);

module.exports=Patient;