import React from 'react'
import { useSelector } from 'react-redux';

const Patients2 = () => {
    const data=useSelector((store)=>store.hospitalData.patientsData);
    console.log(data);
    console.log("hello");
  return (
    <div className='w-full mt-3'>
        <h1 className='p-3 text-center font-bold'>Patients({data.length})</h1>
    </div>
  )
}

export default Patients2