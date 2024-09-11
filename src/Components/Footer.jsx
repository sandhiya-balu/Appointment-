import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md-mx-10 static bottom-0 '>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>
            <div>
                <img src={assets.logo} alt="" className='mb-5 w-40'/>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Easily manage your appointments with our intuitive booking app, designed to streamline scheduling for both businesses and clients.</p>

            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Get In Touch</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 9876543210</li>
                    <li>Prescripto@gmail.com</li>
                </ul>
            </div>
           
        </div>
        <div>
                <hr></hr>
                <p className='py-5 text-sm text-center'>Copyright 2024 @ MedSchhool.com -All Right Reserved</p>
            </div>

    </div>
  )
}

export default Footer