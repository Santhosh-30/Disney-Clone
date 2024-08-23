import React, { useEffect, useState } from 'react';
import GlobalAPI from '../Services/GlobalAPI';
import { HiChevronLeft,HiChevronRight } from "react-icons/hi";
import { useRef } from 'react';
const screen = window.innerWidth;
const ImageUrl = "https://image.tmdb.org/t/p/original";

function Slider() {
    const [movies, setMovies] = useState([]);
    const elementRef = useRef();

    useEffect(() => {
        GlobalAPI.getTrendingMovies
            .then((response) => {
                console.log(response.data.results);
                setMovies(response.data.results);
            })
            .catch((error) => {
                console.error("Error fetching trending movies:", error.message); 
                if (error.response) {
                    console.log("Response error:", error.response.data);
                } else if (error.request) {
                    console.log("Request error:", error.request);
                } else {
                    console.log("Error", error.message);
                }
            });
    }, []);
    const sliderLeft = (element) =>{
        element.scrollLeft+=screen-110
    }
    const sliderRight=(element) =>{
        element.scrollLeft-=screen-110
    }

    return (
        <div className='flex mx-0'>
            <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[250px] cursor-pointer'onClick={()=>sliderRight(elementRef.current)}/>
        <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide  scroll-smooth' ref={elementRef}>
            {movies.map((item, index) => (
                <img
                    key={index}
                    src={ImageUrl + item.backdrop_path}
                    className='min-w-full  h-[500px] md:h-[500px] object-fill object-center  mr-5 rounded-md  hover:border-[3px] hover:border-gray-400 transition-all duration-150 ease-in-out' 
                    alt={item.title || item.name} 
                />
            ))}

        </div>
        <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[250px] right-0 cursor-pointer'onClick={()=>sliderLeft(elementRef.current)}/>

        </div>
    );
}

export default Slider;
