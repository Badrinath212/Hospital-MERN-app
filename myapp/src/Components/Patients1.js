import React from 'react'

const Patients1 = () => {
  return (
    <div className=' text-black w-[700px] p-3'>
        <div className='p-3 shadow-lg bg-slate-100'>
            <h1 className='p-3 text-center font-bold'>Add New Patient</h1>
            <label className='font-bold'>Name</label><br/>
            <input type='text' value="" className='w-96 h-9 mt-4 border border-stone-500 rounded-sm'/><br/>
            <br/>
            <label className='font-bold pt-3'>Age</label><br/>
            <input type='text' value="" className='w-96 h-9 mt-4 border border-stone-500 rounded-sm'/><br/>
            <br/>
            <label className='font-bold pt-3'>Gender</label><br/>
            <input type='text' value="" className='w-96 h-9 mt-4 border border-stone-500 rounded-sm'/><br/>
            <button className='my-5 font-bold bg-slate-500 p-2 rounded-lg'>Add Patient</button>
        </div>
    </div>
  )
}

export default Patients1