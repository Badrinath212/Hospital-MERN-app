import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <div className='mx-4'>
        <div className='p-3'>
            <h1 className='text-green-600 font-bold text-[50px]'>Hospital Management App</h1>
        </div>
        <div>
            <ul className='flex p-3 bg-blue-400 rounded-md text-white font-bold text-[25px]'>
                <Link to={"/appointments"}><li className='mx-3 cursor-pointer'>Appointments</li></Link>
                <Link to={"/doctor"}><li className='mx-3 cursor-pointer'>Doctors</li></Link>
                <Link to={"/patient"}><li className='mx-3 cursor-pointer'>Patients</li></Link>
            </ul>
        </div>
        <Outlet/>
    </div>
  )
}

export default Header