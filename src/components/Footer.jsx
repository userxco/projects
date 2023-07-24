import React from 'react';
import { footerData } from '../data';
import { fadeIn } from '../variants';
import { refresh } from 'aos';

// stagger container
const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerContainer: 0.3,
            delayChildren: 0.2,
        },
    },
};

const Footer = () => {
    // destructure footer data
    const {about, links, program, newsletter} = footerData
  return (
    <footer data-aos='fade-up' className='section bg-dark lg:py-44 py-20 font-cc'>
        <div className='container mx-auto'>
            {/* grid */}
            <div className='text-white flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14'>
                {/* about */}
                <div className='flex-1 flex-col gap-y-6'>
                    {/* title */}
                    <div className='font-gp text-xl uppercase tracking-[0.08em]'>{about.title}</div>
                    {/* subtitle */}
                    <div className='leading-relaxed text-white'> {about.subtitle} </div>
                    {/* address, phone & email */}
                    <div className='flex flex-col gap-y-4 font-cc text-white'>
                        {/* address */}
                        <div className='flex items-center gap-x-[10px]'>
                            <div> {about.address.icon} </div>
                            <div> {about.address.name} </div>
                        </div>
                        {/* phone */}
                        <div className='flex items-center gap-x-[10px]'>
                            <div> {about.phone.icon} </div>
                            <div> {about.phone.number} </div>
                        </div>
                        {/* email */}
                        <div className='flex items-center gap-x-[10px]'>
                            <div> {about.email.icon} </div>
                            <div> {about.email.address} </div>
                        </div>
                    </div>
                </div>
                {/* links */}
                <div className='flex-1 flex flex-col xl:items-center lg:ml-12'>
                    <div>
                        <div className='font-gp text-xl uppercase tracking-[0.08em] mb-6'> {links.title} </div>
                        <ul className='flex flex-col gap-y-4 text-white'>
                            {links.items.map((item, index) => {
                                // destructure item
                                const {href, name} = item;
                                return <li key={index}>
                                    <a href={href} className='hover:text-white transition'>
                                        {name}
                                    </a>
                                </li>;
                            })}
                        </ul>
                    </div>
                </div>
                {/* program */}
                <div className='flex-1'>
                    <div className='font-gp text-xl uppercase tracking-[0.08em] mb-6'> {program.title} </div>
                    <ul className='flex flex-col gap-y-4 text-white'>
                        {program.items.map((item, index) => {
                            return <li key={index}> {item.name} </li>
                        })}
                    </ul>
                </div>
                {/* newsletter */}
                <div className='flex-1 pb-12'>
                    <div className='font-gp text-xl uppercase tracking-[0.08em] mb-6'> {newsletter.title} </div>
                    <div className='leading-relaxed mb-9 text-white'> {newsletter.subtitle} </div>
                    <form className='flex justify-between items-start border-b border-[#b6b6b6]'>
                        <input type="text" className='outline-none placeholder:text-base italic placeholder:capitalize bg-transparent pb-4' 
                        placeholder={newsletter.form.placeholder}
                        />
                        <button type='submit' className='text-2xl cursor-pointer'> {newsletter.form.icon} </button>
                    </form>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer