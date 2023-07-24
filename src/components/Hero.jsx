import React, { useEffect } from 'react';
import {heroData} from '../data';
import {fadeIn} from '../variants';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FiArrowRight } from 'react-icons/fi';
import bg from '../img/hero/bg.jpg';




const Hero = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
  return <section id='hero' className='bg-hero bg-cover bg-center min-h-[40vh] lg:h-[948px] bg-no-repeat relative -z-10 mt-[120px] lg:mt-[150px]'>
    <div data-aos='fade-up' className='container mx-auto min-h-[40vh] lg:h-full flex justify-center items-center xl:justify-end'>
      <div className='text-white text-center lg:text-left lg:max-w-[640px] lg:ml-96'>
        <h1 className='md:text-[90px] text-[60px] tracking-tighter font-gp'> I’m Void Sir. </h1>
        <p className='mb-8 lg:mb-16  leading-relaxed lg:text-[32px] md:text-[26px] text-xl font-cc'> Tattoos have their own unique power and magic. They not only beautify the body but also the psyche. </p>
        <div>
          <button className='flex justify-center items-center  bg-white text-dark
          gap-x-3 border hover:bg-white/20 hover:bg-black hover:text-white
          px-7 py-4 btn-outsline mx-auto lg:mx-0 font-overall rounded-full border-white'>
            <span className='font-cc text-[16px]'>Read more</span>
            <div className='text-xl'>
              <FiArrowRight className=''/>
            </div>
          </button>
        </div>
      </div>
      {/* outline text */}
      <div className='hidden xl:flex absolute -bottom-2 right-0 left-0 before:content-outlineText'>

      </div>
    </div>
  </section>;
};

export default Hero;
