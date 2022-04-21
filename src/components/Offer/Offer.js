import React from 'react';
import 'aos/dist/aos.css';

import './Offer.css';
import OfferImg from '../../Assets/Offer.jpg';
import OfferBg from '../../Assets/ingredient_removebg.png';

const Offer = () => {
  return (
    <div id='offer'>
    <h1 className='Heading-gradient text-center'>Special Deal</h1>
    <div className='w-[100%] h-[90vh] relative flex items-center justify-center mt-[-2rem]'>
        <img src={OfferBg} className='absolute z-[-10] mt-[-22rem] ml-[80rem]' alt='Offer_bg' />
        <div className='Offer flex gap-0 justify-center items-center'>
            <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" className='Offer-details flex justify-center items-center w-[100%] h-[100%]'>
                <div className='w-[100%] p-[1rem]'>
                    <h3 className='Heading-sub mt-[-6rem] mb-[2rem]'>Combo Meal</h3>
                    <ul className='list-none text-lg text-[#011936]'>
                        <li className='hover:text-xl hover:text-[#F88100]'>2 Sushi</li>
                        <li className='hover:text-xl hover:text-[#F88100]'>1 Roast</li>
                        <li className='hover:text-xl hover:text-[#F88100]'>4 Special Kababs</li>
                        <li className='hover:text-xl hover:text-[#F88100]'>4 Eggs</li>
                    </ul>
                </div>
                
                <div className="Offer-card w-[100%] z-[100]" >
                    <div className="card__content">
                        <div className="card__date"> 21 . 04 . 2022
                        </div>
                        <div className="card__info">
                        <p className='text-[#011936] text-lg Offer-typo'>
                            Special deal for you take it now!
                        </p>
                        {/* <p className='text-[#011936] text-lg opacity-0 hover:opacity-1'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p> */}
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000" className='Offer-media w-[100%] h-[100%]'>
                <img src={OfferImg} alt='Offer_Photo' className='Offer-img h-[100%] rounded-md' />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Offer