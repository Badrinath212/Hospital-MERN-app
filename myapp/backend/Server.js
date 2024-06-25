const express = require('express');
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const bodyparser = require("body-parser");
const patientRouter = require("./models/Patient");
const doctorRouter = require("./routes/Doctors");
const appointmentRouter = require("./models/Appointments");

app.use(cors());
app.use(bodyparser.json());

// mogoose connection

mongoose.connect(
  'mongodb://localhost:27017/hospital',
  {
    useNewUrlParser : true,
    useUnifiedTopology : true,
  }
);
const connection = mongoose.connection;

connection.once('open',()=>{
  console.log(`mongoDB connection is established`);
});


app.use("/doctor",doctorRouter);
app.use("/patients",patientRouter);
app.use("/appointments",appointmentRouter);

app.listen(PORT,()=>{
  console.log(`server is running on ${PORT}`)
})