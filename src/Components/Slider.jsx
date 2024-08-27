import React, { useEffect, useState } from 'react';
import { HiChevronLeft,HiChevronRight } from "react-icons/hi";
import { useRef } from 'react';
import a1 from './../assets/Genere/a1.jpg'
import a2 from './../assets/Genere/a2.jpg'
import a3 from './../assets/Genere/a3.jpg'
import a4 from './../assets/Genere/a4.jpg'
import a5 from './../assets/Genere/a5.jpg'
import f1 from './../assets/Genere/f1.jpg'
import f4 from './../assets/Genere/f4.jpg'
import f6 from './../assets/Genere/f6.jpg'
import s1 from './../assets/Genere/s1.jpg'
import s2 from './../assets/Genere/s2.jpg'
const screen = window.innerWidth;


function Slider() {
    const elementRef = useRef();


    const sliderLeft = (element) =>{
        element.scrollLeft+=screen-110
    }
    const sliderRight=(element) =>{
        element.scrollLeft-=screen-110
    }

    return (
        <div className='flex mx-0'>
            <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[200px] cursor-pointer'onClick={()=>sliderRight(elementRef.current)}/>
        <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide  scroll-smooth' ref={elementRef}>
            
        <img src={a1} className='w-full h-[200px] md:h-96 min-w-full object-center mx-3 rounded-md' alt="scroll" />
        <img src={a2} className='w-full h-[200px] md:h-96 min-w-full object-center mx-3 rounded-md' alt="scroll" />
        <img src={a4} className='w-full h-[200px] md:h-96 min-w-full object-center mx-3 rounded-md' alt="scroll" />
        <img src={a5} className='w-full h-[200px] md:h-96 min-w-full object-center mx-3 rounded-md' alt="scroll" />
        <img src={a3} className='w-full h-[200px] md:h-96 min-w-full object-center mx-3 rounded-md' alt="scroll" />
        <img src={f1} className='w-full h-[200px] md:h-96 min-w-full object-center mx-3 rounded-md' alt="scroll"/>
        <img src={f4} className='w-full h-[200px] md:h-96 min-w-full object-center mx-3 rounded-md' alt="scroll" />
        <img src={f6} className='w-full h-[200px] md:h-96 min-w-full object-center mx-3 rounded-md' alt="scroll" />
        <img src={s1} className='w-full h-[200px] md:h-96 min-w-full object-center mx-3 rounded-md' alt="scroll" />
        <img src={s2} className='w-full h-[200px] md:h-96 min-w-full object-center mx-3 rounded-md' alt="scroll" />
        </div>
        <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[200px] right-0 cursor-pointer'onClick={()=>sliderLeft(elementRef.current)}/>

        </div>
    );
}

export default Slider;
