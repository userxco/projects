import React, {useState} from 'react';
import { interviewData } from '../data';
import ModalVideo from 'react-modal-video';
import { fadeIn } from '../variants';






const Interview = () => {
  //destrucrteure interview data
  const {title, btnText, btnIcon} = interviewData
  //open state
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section id='interview' data-aos='fade-up'>
      <div>
        <h2 className='container mx-auto md:text-[72px] text-[48px] font-gp md:leading-[72px] leading-[48px] tracking-[-1px] md:pb-32 pb-20'>Watch some of our videos and think about make a deal with us</h2>
      </div>
      <div className='bg-dark section bg-interview bg-no-repeat bg-cover bg-center lg:h-[812px] md:h-[600px] h-[300px]'>
        <div className='container mx-auto h-full'>
        <div className='flex flex-col justify-center h-full'>
          <div className='flex flex-col items-start max-w-[880px]'>
            {/* title */}
            <h3 className='text-white md:text-[48px] lg:text-[72px] text-[30px] md:leading-[55px] lg:leading-[72px]
            leading-[30px] font-gp md:tracking-[-1px] capitalize mb-8'>Consider What You Desire. Your Tattoo Artist Will Never Tell You What Tattoo To Have. </h3>
            <div>
              {/* play btn */}
            <div onClick={() => setIsOpen(true)} className='flex text-white items-center gap-x-5 cursor-pointer hover:opacity-80 trnsition '>
              {/* border */}
              <div className='w-[70px] h-[70px] lg:w-[91px] lg:h-[91px] border-white/40 rounded-full text-dark p-[5px] lg:p-[8px]'>
                {/* inner */}
                <div className='bg-white w-full h-full rounded-full flex justify-center items-center'>
                  <div className='pl-1'> {btnIcon} </div>
                </div>
              </div>
                {/* btn text */}
                <div className='font-cc uppercase'> {btnText} </div>
            </div>
            </div>
            {/* modal video */}
            <ModalVideo channel='youtube' autoplay 
            isOpen={isOpen} 
            videoId='Laa2dqK2GiE' 
            onClose={() => setIsOpen(false)} />
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Interview