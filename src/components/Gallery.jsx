import React, {useState} from 'react';
import { galleryData } from '../data';
import { PhotoAlbum } from 'react-photo-album';
import { Lightbox } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { fadeIn } from '../variants';

const slides = galleryData.images.map(({original, width, height}) => ({
    src: original,
    width,
    height,
}));

const Gallery = () => {
    //index state 
    const [index, setIndex] = useState(-1);
    // destructure gallery data
    const {title, btnText, btnIcon, images} = galleryData;
  return (
    <section id='gallery' className='bg-[#f9f9f9] section relative mt-[40px] lg:mt-0'>
        <div data-aos='fade-up'>
            <div  className='container mx-auto'>
            <h2 className='lg:mb-20 md:text-[72px] text-[48px] font-gp py-6 tracking-tight'> Check my gallery: </h2>
        </div>
        {/* photo album */}
        <div className='mb-6 lg:mb-12'>
            <PhotoAlbum 
            onClick={(event, photo, index) => setIndex(index)} 
            layout='rows' 
            photos={images} />
            <Lightbox 
            slides={slides} 
            styles={{ container : { backgroundColor: 'rgba(0,0,0,.9)'} }}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            />
        </div>
        {/* btn */}
        <div className='flex justify-center pb-12'>
           <button className='flex justify-center items-center gap-x-2 border 
           px-7 py-4 rounded-full bg-black text-white border-black 
           font-cc hover:bg-white hover:text-black'>
            <span>View all</span>
            <div> {btnIcon} </div>
        </button> 
        </div>
        </div>
    </section>
  )
}

export default Gallery