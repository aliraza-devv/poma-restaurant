import React from 'react';
import './About.css'
import 'aos/dist/aos.css';

import Cook from '../../Assets/cook-img.png';

const About = () => {
  return (
    <div id='about' className='w-full flex min-h-[80vh] About'>
        <div className='max-w-[50%] ml-[-8rem] About-left' data-aos="zoom-out-up" data-aos-duration='900'>
            <img loading='lazy' src={Cook} alt='Cook' className='h-[80vh] About-img' />
        </div>
        <div className='max-w-50% About-right'>
            <h2 className='Heading-gradient' data-aos="fade-left" data-aos-duration='700'>About Us</h2>
            <h2 className='Story' data-aos="fade-right" data-aos-duration='700'>Discover Our <br/> Restaurant Story</h2>
            <p className='text-xl mt-8 md:text-[1.2rem] About-typo'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor <br />
              sed do eiusmod tempor Lorem ipsum dolor sit incididunt ut labore et dolore <br />
              magna aliqua. Lorem ipsum dolor sit Ut enim ad minim veniam, quis nostrud <br />
              exercitation Lorem ipsum dolor situllamco laboris nisi ut aliquip ex ea commodo<br /> 
              consequat."Lorem Lorem ipsum dolor sit ipsum dolor sit amet, consectetur <br />
            </p>
        </div>
    </div>
  )
}

export default About