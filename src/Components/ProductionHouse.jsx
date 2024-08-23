import React, { useRef } from 'react';

import Disneyi from './../assets/Images/disney.png';
import Marveli from './../assets/Images/marvel.png';
import Nationali from './../assets/Images/nationalG.png';
import Pixari from './../assets/Images/pixar.png';
import starwari from './../assets/Images/starwar.png';

import Disney from './../assets/Videos/disney.mp4';
import Marvel from './../assets/Videos/marvel.mp4';
import National from './../assets/Videos/national-geographic.mp4';
import Pixar from './../assets/Videos/pixar.mp4';
import starwar from './../assets/Videos/star-wars.mp4';

function ProductionHouse() {
    const ProductionList = [
        {
            id: 1,
            image: Disneyi,
            video: Disney
        },
        {
            id: 2,
            image: Marveli,
            video: Marvel
        },
        {
            id: 3,
            image: Nationali,
            video: National
        },
        {
            id: 4,
            image: Pixari,
            video: Pixar
        },
        {
            id: 5,
            image: starwari,
            video: starwar
        }
    ];

    return (
        <div className='flex gap-2 md:gap-5 p-2 md:px-16'>
            {ProductionList.map((item) => (
                <div
                    key={item.id}
                    className='relative border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-150 ease-in-out cursor-pointer  shadow-xl shadow-gray-800'
                    onMouseEnter={(e) => e.currentTarget.querySelector('video').play()}
                    onMouseLeave={(e) => e.currentTarget.querySelector('video').pause()}
                >
                    <video
                        src={item.video}
                        loop
                        muted
                        playsInline
                        className='absolute inset-0 w-full h-full object-cover rounded-md z-10 opacity-0 hover:opacity-50 transition-opacity duration-300'
                    />
                    <img
                        src={item.image}
                        className='w-full h-full object-cover rounded-md z-0'
                        alt="Production House"
                    />
                </div>
            ))}
        </div>
    );
}

export default ProductionHouse;
    