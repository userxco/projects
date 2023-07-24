import React, {useEffect, useState} from 'react';
import { useInView } from 'react-intersection-observer';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
    // destructure useInView hook
    const {ref, inView} = useInView({
        threshold: 0.2,
    });

    // full body tatto state
    const [fullBody, setFullBody] = useState(0);

     // safely piercing
     const [piercing, setPiercing] = useState(0);

     // full color tatto
     const [fullColor, setFullColor] = useState(0);

     // temporary tattoo
     const [temporary, setTemporary] = useState(0);

    useEffect(()=> {
        if (inView) {
            setTimeout(() => {
                if (fullBody < 80) {
                    setFullBody(fullBody + 1);
                }
                if (piercing < 90) {
                    setPiercing(piercing + 1);
                }
                if (fullColor < 95) {
                    setFullColor(fullColor + 1);
                }
                if (temporary < 65) {
                    setTemporary(temporary + 1);
                }
            }, 50);
        } else {
            setFullBody(0);
            setPiercing(0);
            setFullColor(0);
            setTemporary(0);
        }
    }, [inView, fullBody, piercing, fullColor, temporary]);

    // circular progressbar styles 
    const styles = {
        path: {
            stroke: '#111111'
        },
        trail: {
            stroke: '#eeeeee'
        },
        text: {
            fill: '#111111',
            fontSize: '24px',
        },
    };

  return (
    <section data-aos="fade-up" ref={ref} className='section lg:mt-[200px] mt-[50px] font-cc mb-52'>
        <div className='container mx-auto'>
            <div className='md:pb-32 pb-20'>
                <h2 className='md:text-[72px] text-[48px] font-gp tracking-tight'>Check my skills.</h2>
            </div>
            <div className='flex lg:flex flex-col lg:flex-row justify-between items-center gap-y-12 md:grid md:grid-cols-2 md:ml-32 lg:ml-0 md:gap-y-28'>
                {/* circular item */}
                <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
                    <CircularProgressbar 
                    strokeWidth={1} 
                    value={fullBody} 
                    styles={styles} 
                    text={`${fullBody}%`}
                    />
                    {/* text */}
                    <div className='uppercase font-cc tracking-[1.2px] text-center md:text-[32px] text-[24px]'>Full Body Tattoo</div>
                </div>
                <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
                    <CircularProgressbar 
                    strokeWidth={1} 
                    value={piercing} 
                    styles={styles} 
                    text={`${piercing}%`}
                    />
                    {/* text */}
                    <div className='uppercase font-cc tracking-[1.2px] text-center md:text-[32px] text-[24px]'>Safely Piercing</div>
                </div>
                <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
                    <CircularProgressbar 
                    strokeWidth={1} 
                    value={fullColor} 
                    styles={styles} 
                    text={`${fullColor}%`}
                    />
                    {/* text */}
                    <div className='uppercase font-cc tracking-[1.2px] text-center md:text-[32px] text-[24px]'>Full color Tattoo</div>
                </div>
                <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
                    <CircularProgressbar 
                    strokeWidth={1} 
                    value={temporary} 
                    styles={styles} 
                    text={`${temporary}%`}
                    />
                    {/* text */}
                    <div className='uppercase font-cc tracking-[1.2px] text-center md:text-[32px] text-[24px]'>Temporary tattoo</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills