import React from 'react';
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import 'aos/dist/aos.css';

import './Footer.css';
import Logo from '../../Assets/logo-removebg.png'

const Footer = () => {
  return (
    <footer className='Footer max-w-[100%] min-h-[35vh] '>
        <div className='flex justify-between items-center Footer-sub text-color-white gap-[1rem] mt-[-1.5rem]'>
            <div className='mt-[2rem] ml-[3rem]'>
                <h2 className='font-bold text-xl'>Contact Us</h2>
                <div className='flex'>
                    <p>Follow us on: </p> <span className='ml-4 flex gap-2 cursor-pointer'>
                        <FaFacebook/>
                        <FaInstagram />
                        <FaTwitter />
                    </span>
                </div>
                <div className='flex'>
                    <p>Email: </p> <span className='ml-4'>email@email.com</span>
                </div>
                <div className='flex'>
                    <p>Phone No. </p> <span className='ml-4'>+9231212345</span>
                </div>
                <p>Based in Pakistan, Punjab, Vehari</p>
            </div>
            <div className='Footer-logo' data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2500">
                <img alt='Footer_Logo' loading='lazy' className='h-[12rem]' src={Logo} />
            </div>
            <div className='mr-[3rem] mt-[3rem]'>
                <p className='Footer-copyright-item' >
                    Copyright reserved by <span className='Footer-contact-span'>Ali Raza</span> - 2022. Its is <br />
                    just a practice project landing page for a <br />
                    restaurant.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer