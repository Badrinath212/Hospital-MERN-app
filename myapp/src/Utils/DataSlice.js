import { createSlice } from "@reduxjs/toolkit";

const DataSlice=createSlice({
    name:"Hospital data",
    initialState:{
        patientsData:[],
        appointmentsData:[],
        doctorsData:[]
    },
    reducers:{
        addPatientData:(state,action)=>{
            state.patientData=action.payload;
        },
        addDoctorData:(state,action)=>{
            state.doctorsData=action.payload;
        },
        addAppointmentData:(state,action)=>{
            state.appointmentsData.push(action.payload);
        },
        updateDoctorData:(state,action)=>{
            state.doctorsData=state.doctorsData.map((doctor)=>
            doctor._id===action.payload._id ? action.payload : doctor)
        },
        updateDeletedDoctorData:(state,action)=>{
            state.doctorsData=state.doctorsData.filter((doctor)=>{
                return action.payload._id!==doctor._id;
            })
        }
    }
});

export const {addAppointmentData,addDoctorData,addPatientData, updateDeletedDoctorData,updateDoctorData} =DataSlice.actions
export default DataSlice.reducer;