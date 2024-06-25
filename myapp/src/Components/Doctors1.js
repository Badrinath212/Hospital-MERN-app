import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDoctorData, updateDoctorData } from '../Utils/DataSlice';
import { seteditDoctor, seteditMode } from '../Utils/EditModeSlice';

const Doctors1 = () => {
  const dispatch = useDispatch();
  const [newDoctor, setNewDoctor] = useState({ name: "", field: "" });
  const isEditMode = useSelector((store) => store.edit.isEditMode);
  const editDoctor = useSelector((store) => store.edit.editDoctor);
  const data=useSelector((store)=>store.hospitalData.doctorsData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const doctorData = {
      name: newDoctor.name,
      speciality: newDoctor.field,
    };
    try {
      const response = await fetch(`http://localhost:5000/doctor/${isEditMode ? `update/${editDoctor._id}` : "add"}`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(doctorData),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const json=await response.json();
      if(isEditMode){
        dispatch(updateDoctorData(json));
        dispatch(seteditMode(false));
      }else{
        console.log("Doctor data added successfully");
        dispatch(addDoctorData([json,...data]));
      }
      setNewDoctor({ name: "", field: "" });
    } catch (error) {
      console.error("Failed to submit data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/doctor");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const json = await response.json();
        dispatch(addDoctorData(json));
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const {name,value}=e.target;
    if(isEditMode){
      dispatch(seteditDoctor({
        ...editDoctor,
        [name]: value
      }))
    }else{
      setNewDoctor((prevState)=>({
        ...prevState,
        [name]: value
    }))}
  }
  useEffect(() => {
    if (isEditMode) {
      setNewDoctor({
        name: editDoctor.name,
        field: editDoctor.speciality
      });
    }
  }, [isEditMode, editDoctor]);
  return (
    <div className='text-black w-[700px] p-3'>
      <div className='p-3 shadow-lg bg-slate-100'>
        <h1 className='p-3 text-center font-bold'>{isEditMode ? "Edit Doctor" : "Add New Doctor"}</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className='font-bold'>Name</label><br />
          <input 
            value={isEditMode ? editDoctor.name : newDoctor.name} 
            onChange={handleChange} 
            name="name" 
            type='text' 
            className='w-96 h-9 mt-4 border border-stone-500 rounded-sm' 
            required 
          /><br />
          <br />
          <label htmlFor="field" className='font-bold pt-3'>Speciality</label><br />
          <input 
            value={isEditMode ? editDoctor.speciality : newDoctor.field} 
            onChange={handleChange} 
            name="field" 
            type='text' 
            className='w-96 h-9 mt-4 border border-stone-500 rounded-sm' 
            required 
          /><br />
          <button type='submit' className='my-5 font-bold bg-slate-500 p-2 rounded-lg'>
            {isEditMode ? "Update Doctor" : "Add Doctor"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Doctors1;
