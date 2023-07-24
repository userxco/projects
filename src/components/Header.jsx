import React, {useEffect, useState} from 'react';
import { BsMenuButtonWideFill } from 'react-icons/bs';
import logo from '../img/header/logo.svg';
import { IoLogoInstagram, IoLogoPinterest, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io';
import { GrFacebookOption } from 'react-icons/gr';
import { Link } from 'react-scroll';



const Header = () => {
    
    const [isActive, setIsActive] = useState(false);
    // nav mobile
    const [navMobile, setNavMobile] = useState(false);
    // scroll event
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
        })
    })
  return (
    
    <header  className={`${isActive ? 'h-[100px] lg:h-[110px] shadow-lg' : 'h-[120px] lg:h-[150px]'} fixed left-0 right-0 top-0 z-10 bg-white max-w-[1920px] w-full mx-auto transition-all duration-300`}>
        <div  className='flex  justify-between items-center h-full pl-[50px] pr-[60px]'>
            {/* logo */}
            <a data-aos='fade-down' href="/">
                <img src={logo} alt=""  className='w-[188px] h-[90px]'/>
            </a>
            {/* nav - initially hidden - show on desktop */}

            <div className='hidden xl:flex'>
                {/* Nav_ */}
        <div data-aos='fade-down'>
            <ul className='flex gap-x-[58px]'>
               
                   <li className='font-cc tracking-normal text-[16px] leading-[17px] hover:border-b-2 hover:border-dark transition duration-300 cursor-pointer'>
                   <Link  activeClass="active" to="hero" spy={true} smooth={true} offset={50} duration={500}> Home </Link>
                   </li>
                   <li className='font-cc tracking-normal text-[16px] leading-[17px] hover:border-b-2 hover:border-dark transition duration-300 cursor-pointer'>
                   <Link  activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}> About </Link>
                    </li>
                   <li className='font-cc tracking-normal text-[16px] leading-[17px] hover:border-b-2 hover:border-dark transition duration-300 cursor-pointer'>
                    <Link  activeClass="active" to="gallery" spy={true} smooth={true} offset={50} duration={500}> Gallery </Link> 
                    </li>
                   <li className='font-cc tracking-normal text-[16px] leading-[17px] hover:border-b-2 hover:border-dark transition duration-300 cursor-pointer'>
                   <Link  activeClass="active" to="interview" spy={true} smooth={true} offset={50} duration={500}> Interview </Link> 
                    </li>
                   <li className='font-cc tracking-normal text-[16px] leading-[17px] hover:border-b-2 hover:border-dark transition duration-300 cursor-pointer'>
                    <Link  activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}> Contact </Link> 
                    </li>
               
            </ul>
        </div>
            </div>{/* nav menu btn = showing by default on deslstop mode */}
            <div onClick={() => setNavMobile(!navMobile)} className='xl:hidden absolute right-[5%] bg-dark text-white p-2 rounded-md cursor-pointer'>
                <BsMenuButtonWideFill size={30}/>
            </div>
            {/* nav Mobile - showing by defoul hidden on desktop */}
            <div className={`${navMobile ? 'max-h-full' : 'max-h-0'} ${isActive ? 'top-[100px] lg:top-[110px]' : 'top-[120px] lg:top-[150px]'} fixed bg-white w-full h-full left-0 -z-10 transsition-all duration-300`}>
                {/* NavMobile */}
                <div className='w-full h-full flex flex-col justify-evenly overflow-hidden'>
                    <ul className='flex flex-col justify-center items-center gap-y-8 py-5 mb-6'>
                       <li className='font-overall text-2xl hover:text-gray-500 cursor-pointer'>Home</li>
                       <li className='font-overall text-2xl hover:text-gray-500 cursor-pointer'>About</li>
                       <li className='font-overall text-2xl hover:text-gray-500 cursor-pointer'>Gallery</li>
                       <li className='font-overall text-2xl hover:text-gray-500 cursor-pointer'>Interview</li>
                       <li className='font-overall text-2xl hover:text-gray-500 cursor-pointer'>Contact</li>
                    </ul>
                    {/* social icons */}

                <div data-aos='fade-down' className='text-2xl'>
                    <div className='flex justify-center items-center gap-x-[30px]'>
                         <GrFacebookOption size={20} className='cursor-pointer'/>
                         <IoLogoInstagram size={20} className='cursor-pointer'/>
                         <IoLogoPinterest size={20} className='cursor-pointer'/>
                         <IoLogoTwitter size={20} className='cursor-pointer'/>
                         <IoLogoYoutube size={20} className='cursor-pointer'/>
                    </div>
                </div>
               </div>
            </div>
            {/* social icons - initially hidden -shwow on desktop */}

            <div className='hidden xl:flex'>
                {/* Social icons */}

                <div className='flex justify-center items-center gap-x-[30px]'>
                    <GrFacebookOption size={20} className='cursor-pointer hover:animate-bounce duration-100'/>
                    <IoLogoInstagram size={20} className='cursor-pointer hover:animate-bounce duration-100'/>
                    <IoLogoPinterest size={20} className='cursor-pointer hover:animate-bounce duration-100'/>
                    <IoLogoTwitter size={20} className='cursor-pointer hover:animate-bounce duration-100'/>
                    <IoLogoYoutube size={20} className='cursor-pointer hover:animate-bounce duration-100'/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header