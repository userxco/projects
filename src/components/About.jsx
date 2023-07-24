import React from 'react';
import { aboutData } from '../data';
import { fadeIn } from '../variants';
import { FiArrowRight } from 'react-icons/fi';

const About = () => {
    const {title, subtitle1, subtitle2, btnText, btnIcon} = aboutData;
  return (
    <section id='about' data-aos='fade-up' className='lg:py-16 xl:pb-[160px] py-12'>
        <div className='container mx-auto'>
            <div className=''>
                {/* numbers */}
                <div className='flex justify-center items-center lg:flex-row flex-1'>
                   <div className='text-[360px] xl:text-[560px] leading-none font-cool lg:tracking-[0.055em] bg-about bg-no-repeat bg-right bg-clip-text text-transparent'>01</div> 
                </div>
                {/* text */}
                <div>
                    <div>
                        <h2 className='md:text-[72px] text-[48px] md:mb-20 mb-6 font-gp tracking-tight md:leading-[72px] leading-[48px]'>My Story: learn more about what i do in my job</h2>
                        <div>
                            <p className='md:text-[32px] md:leading-[44.8px] text-2xl mb-6 font-cc'>
                            In velit arcu posuere integer. Dolor sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed scelerisque praesent duis volutpat laoreet.
                            </p>
                            <p className='md:text-[32px] md:leading-[44.8px] text-2xl mb-9 font-cc'>
                            Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.
                            </p>
                            <button className='flex justify-center items-center gap-x-2 border bg-black text-white border-dark px-7 py-4 hover:bg-white hover:text-black hover:border-black rounded-full'>
                                 <span className='font-cc text-[16px]'>Know more</span>
                                 <div><FiArrowRight size={18}/></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    </section>
  )
}

export default About