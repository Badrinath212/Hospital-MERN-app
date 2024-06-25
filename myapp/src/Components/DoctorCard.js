import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDeleteDoctor, setDeleteMode } from '../Utils/EditModeSlice';
import { updateDeletedDoctorData } from '../Utils/DataSlice';

const DoctorCard = ({doctor,onEdit}) => {
  const dispatch = useDispatch();
  const handleDelete=()=>{
    console.log("deleteMode on")
    dispatch(setDeleteMode())
    dispatch(setDeleteDoctor(doctor));
  }
  const deleteDoctor = useSelector((store)=>store.edit.deleteDoctor);
  useEffect(()=>{
    const handleDeleteMode= async ()=>{
      try {
        const respose = await fetch(`http://localhost:5000/doctor/delete/${deleteDoctor._id}`,{
          method: "DELETE",
        })
        if(!respose.ok){
          throw new Error(`Error : ${respose.status}`)
        }
        const json=await respose.json();
        dispatch(updateDeletedDoctorData(json));
        setDeleteMode(false);
      } catch (err){
        console.log(`Error: ${err}`);
      }
    };
    handleDeleteMode()
  },[handleDelete,dispatch])
  return (
    <div className='w-[600px] bg-slate-200 ml-[210px] rounded-md h-28 font-bold my-5'>
        <h1 className='text-center text-xl'>{doctor.name} - {doctor.speciality}</h1>
        <div className='flex justify-between mt-11'>
          <button className='bg-orange-400 p-2 w-28 rounded-lg ml-2 mb-2' onClick={()=>onEdit(doctor)}>Edit</button>
          <button className='bg-orange-400 p-2 w-28 rounded-lg mr-2 mb-2' onClick={()=>handleDelete()}>Delete</button>
        </div>
    </div>
  )
}

export default DoctorCard