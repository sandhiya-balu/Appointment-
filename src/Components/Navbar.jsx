import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import  '../index.css'


const Navbar = () => {

    const navigate = useNavigate();
    const [showmenu,setShowmenu]=useState(false);
    const [token,setToken]=useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img src={assets.logo} alt='' className='w-44 cursor-pointer' onClick={()=>navigate('/')}/>
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1'>Home</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to="/doctors">
                <li className='py-1'>All Doctors</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>About</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>Contact</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token? <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img src={assets.profile_pic} alt='' className='w-8 rounded-full'/>
                    <img src={assets.dropdown_icon} alt='' className='w-2.5'/>
                   <div className=' absolute top-0 right-0  pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                            <p className='hover:text-black cursor-pointer' onClick={()=>navigate('/my-profile')}>My Profile</p>
                            <p className='hover:text-black cursor-pointer' onClick={()=>navigate('/my-appointments')}>My Apponitments</p>
                            <p className='hover:text-black cursor-pointer' onClick={()=>setToken(false)}>Logout</p>

                        </div>

                   </div>

                </div> :
            
            <button className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block' onClick={()=>navigate('/login')}>Create Account</button>
            }

            <img src={assets.menu_icon} className='w-6 md:hidden' alt='' onClick={()=>setShowmenu(true)}/>
            <div className={`${showmenu?'fixed w-full' :'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                <div className='flex items-center justify-between px-5 py-6'>
                    <img className='w-36' src={assets.logo} alt=""/>
                    <img className='w-7' src={assets.cross_icon} alt='' onClick={()=>setShowmenu(false)}/>
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <NavLink to='/' onClick={()=>setShowmenu(false)}>Home</NavLink>
                    <NavLink to='/doctors'  onClick={()=>setShowmenu(false)}>All Doctors</NavLink>
                    <NavLink to='/about'  onClick={()=>setShowmenu(false)}>About</NavLink>
                    <NavLink to='/contact'  onClick={()=>setShowmenu(false)}>Contact</NavLink>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar