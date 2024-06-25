import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DoctorCard from './DoctorCard';
import {  seteditDoctor, seteditMode } from '../Utils/EditModeSlice';

const Doctorss2 = () => {
    const doctorsData=useSelector((store)=>store.hospitalData.doctorsData);
    const dispatch=useDispatch();
    const handleEditDoctor=(doctor)=>{
      dispatch(seteditMode(true));
      dispatch(seteditDoctor(doctor));
    }
  return doctorsData && (
    <div className='w-full mt-3'>
        <h1 className='p-3 text-center font-bold'>Doctors({doctorsData.length})</h1>
        <div className=''>
          {doctorsData.map((doctor)=>(
            <DoctorCard 
              key={doctor._id} 
              doctor={doctor}
              onEdit={handleEditDoctor}/>
          ))}
        </div>
    </div>
  )
}

export default Doctorss2