import React, { useState } from 'react'
import DatePicker  from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Appointments1 = () => {
    const [date,setDate]=useState(new Date());
  return (
    <div className=' text-black w-[700px] p-3'>
        <div className='p-3 shadow-lg bg-slate-100'>
            <h1 className='p-3 text-center font-bold'>Add New Appointment</h1>
            <label className='font-bold'>Patient Name</label><br/>
            <input type='text' value="" className='w-96 h-9 mt-4 border border-stone-500 rounded-sm'/><br/>
            <br/>
            <label className='font-bold pt-3'>Doctor Name</label><br/>
            <input type='text' value="" className='w-96 h-9 mt-4 border border-stone-500 rounded-sm'/><br/>
            <br/>
            <label className='font-bold pt-3'>Date</label><br/>
            <DatePicker 
                selected={date} 
                onChange={(date)=>setDate(date)} 
                className='w-96 h-9 mt-4 border border-stone-500 rounded-sm'/>
            <br/>
            <button className='my-5 font-bold bg-slate-500 p-2 rounded-lg'>Book Appointment</button>
        </div>
    </div>
  )
}

export default Appointments1