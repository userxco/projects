import React from 'react';
import { contactData } from '../data';
import { fadeIn } from '../variants';

const Contact = () => {
    // destructure contact data
    const {title, info, form} = contactData;
  return (
    <section id='contact' data-aos='fade-up' className='md:py-32 py-20 font-cc'>
        <div className='container mx-auto'>
            <div className='flex flex-col xl:flex-row gap-y-16'>
                {/* text */}
                <div className='flex-1'>
                    {/* title */}
                    <h2 className='md:text-[72px] text-[48px] md:leading-[72px] leading-[48px] font-gp max-w-[490px] md:pb-20 pb-16 tracking-[-1px]'> {title} </h2>
                    {/* info items */}
                    <div className='flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0'>
                        {info.map((item, index) => {
                            // destructure item
                            const {title, subtitle, address, phone, email, link} = item;
                            return <div key={index}>
                                {/* title */}
                                <div className='font-gp uppercase text-xl mb-3'> {title} </div>
                                {/* subtitle */}
                                <div className='mb-6 text-[#333] leading-[187%] tracking-[0.02em] font-cc'> {subtitle} </div>
                                {/* address phone & gmail */}
                                <div className='flex flex-col gap-y-3 mb-8'>
                                    {/* address */}
                                    <div className='flex items-center gap-[10px]'>
                                       <div> {address.icon} </div> 
                                       <div className='font-cc '> {address.name} </div> 
                                    </div>
                                    {/* phone */}
                                    <div className='flex items-center gap-[10px]'>
                                       <div> {phone.icon} </div> 
                                       <div className='font-cc'> {phone.number} </div> 
                                    </div>
                                    {/* email */}
                                    <div className='flex items-center gap-[10px]'>
                                       <div> {email.icon} </div> 
                                       <div className='font-cc'> {email.address} </div> 
                                    </div>
                                </div>
                                {/* link */}
                                    <a href="#" className='font-cc border-b border-dark pb-[5px]'> {link} </a>
                            </div>;
                        })}
                    </div>
                </div>
                {/* form */}
                <div className='flex-1 xl:pl-[40px] flex justify-center items-center'>
                    <form className='flex flex-col gap-y-10 w-full'>
                        <input type="text" className='border-b border-dark placeholder:text-[#555] italic translate-[0.06em] outline-none pb-4' placeholder={form.name} />
                        <input type="text" className='border-b border-dark placeholder:text-[#555] italic translate-[0.06em] outline-none pb-4' placeholder={form.email} />
                        <input type="text" className='border-b border-dark placeholder:text-[#555] italic translate-[0.06em] outline-none pb-4' placeholder={form.message} />
                        {/* button */}
                        <button className='border bg-black text-white border-dark px-7 py-4 hover:bg-white hover:text-black hover:border-black rounded-full self-start'> {form.btnText} </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact