import React from 'react';
import { testimonialData } from '../data';
import {Swiper, SwiperSlide} from 'swiper/react';
import { fadeIn } from '../variants';
import 'swiper/css'
import quote from '../img/testimonial/quote.svg';


const Testimonials = () => {
  return (
    <section data-aos='fade-up' className='mt-32 lg:pt-0 lg:mb-32 mb-12'>
        <div className='container mx-auto '>
            <div className='pb-20'>
                <h2 className='font-gp md:text-[72px] text-[48px] tracking-tight md:leading-[72px] leading-[48px]'>What they said abou us from people we shared experiences with.</h2>
            </div>
            <Swiper>
                 <SwiperSlide >
                        <div className='max-w-[1200px] mx-auto cursor-pointer flex flex-col items-center lg:flex-row lg:items-start gap-x-[38px]'>
                            {/* quote img */}
                            <div className='w-[154px] h-[109px] mb-8'>
                                <img src={quote} alt="" />
                            </div>
                            {/* message, name & occupation */}
                            <div className='flex-1 lg:mt-[54px]'>
                                {/* message */}
                                <div className='text-[24px] font-cc md:text-[36px] leading-normal mb-6 lg:mb-12'> The entire team is extremely kind and friendly. They're fantastic. They're great at what they do! And it's unique.They will properly consult with you. </div>
                                {/* name & occupation */}
                                <div className='flex items-center text-xl lg:text-2xl'>
                                   {/* name*/}
                                <div className='font-gp md:text-[32px] text-[24px] leading-[32px]'> Jack Geoffrey </div>
                                <span className='mx-4'>|</span>
                                {/* occupation */}
                                <div className='font-gp md:text-[32px] text-[24px]'> Tattoo Artist </div>  
                                </div>
                            </div>
                         </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='max-w-[1200px] mx-auto cursor-pointer flex flex-col items-center lg:flex-row lg:items-start gap-x-[38px]'>
                            {/* quote img */}
                            <div className='w-[154px] h-[109px] mb-8'>
                                <img src={quote} alt="" />
                            </div>
                            {/* message, name & occupation */}
                            <div className='flex-1 lg:mt-[54px]'>
                                {/* message */}
                                <div className='text-[24px] font-cc md:text-[36px] leading-normal mb-6 lg:mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequuntur numquam voluptates corporis fugit tempora explicabo sint ad id error!</div>
                                {/* name & occupation */}
                                <div className='flex items-center text-xl lg:text-2xl'>
                                   {/* name*/}
                                <div className='font-gp md:text-[32px] text-[24px] leading-[32px]'> Leighton Kramer </div>
                                <span className='mx-4'>|</span>
                                {/* occupation */}
                                <div className='font-gp md:text-[32px] text-[24px]'> Tattoo Artist </div>  
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='max-w-[1200px] mx-auto cursor-pointer flex flex-col items-center lg:flex-row lg:items-start gap-x-[38px] mb-4'>
                            {/* quote img */}
                            <div className='w-[154px] h-[109px] mb-8'>
                                <img src={quote} alt="" />
                            </div>
                            {/* message, name & occupation */}
                            <div className='flex-1 lg:mt-[54px]'>
                                {/* message */}
                                <div className='text-[24px] font-cc md:text-[36px] leading-normal mb-6 lg:mb-12'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</div>
                                {/* name & occupation */}
                                <div className='flex items-center text-xl lg:text-2xl'>
                                   {/* name*/}
                                <div className='font-gp md:text-[32px] text-[24px] leading-[32px] '> Bowen Higgins </div>
                                <span className='mx-4'>|</span>
                                {/* occupation */}
                                <div className='font-gp md:text-[32px] text-[24px]'> Tattoo Artist </div>  
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='max-w-[1200px] mx-auto cursor-pointer flex flex-col items-center lg:flex-row lg:items-start gap-x-[38px]'>
                            {/* quote img */}
                            <div className='w-[154px] h-[109px] mb-8'>
                                <img src={quote} alt="" />
                            </div>
                            {/* message, name & occupation */}
                            <div className='flex-1 lg:mt-[54px]'>
                                {/* message */}
                                <div className='text-[24px] font-cc md:text-[36px] leading-normal mb-6 lg:mb-12'>search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
                                {/* name & occupation */}
                                <div className='flex items-center text-xl lg:text-2xl'>
                                   {/* name*/}
                                <div className='font-gp md:text-[32px] text-[24px] leading-[32px]'> Saige Fuentes. </div>
                                <span className='mx-4'>|</span>
                                {/* occupation */}
                                <div className='font-gp md:text-[32px] text-[24px]'> Tattoo Artist </div>  
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

            </Swiper>
        </div>
    </section>
  )
}

export default Testimonials