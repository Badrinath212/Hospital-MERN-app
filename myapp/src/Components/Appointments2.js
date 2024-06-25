import React from 'react'
import { useSelector } from 'react-redux';

const Appointments2 = () => {
    const appointmentsData=useSelector((store)=>store.hospitalData.appointmentsData);
  return (
    <div className='w-full mt-3'>
        <h1 className='p-3 text-center font-bold'>Appointments({appointmentsData.length})</h1>
    </div>
  )
}

export default Appointments2