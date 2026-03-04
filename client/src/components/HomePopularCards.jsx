import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function HomePopularCards() {

    const [popularTv, setPopularTv] = useState([]);
    const [popularMovie, setPopularMovie] = useState([]);
    const [popularPeople, setPopularPeople] = useState([]);
    const [type, setType] = useState("movie");

    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/discover/tv?api_key=f470f67e0a8d6712635048ad1c07ac53')
        .then((response)=>{ setPopularTv(response.data.results) })        
    },[])

    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=f470f67e0a8d6712635048ad1c07ac53')
        .then((response)=>{ setPopularMovie(response.data.results) })
    },[])

    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/person/popular?api_key=f470f67e0a8d6712635048ad1c07ac53')
        .then((response)=>{ setPopularPeople(response.data.results) })
    },[])

    const displayData =
        type === "movie"
        ? popularMovie
        : type === "tv"
        ? popularTv
        : popularPeople;

    return (
        <div className='px-14 my-10 flex flex-col gap-10'>

            {/* Header Section */}
            <div className='flex items-center gap-5 mb-5'>
                <h1 className='text-xl font-semibold'>Popular</h1>

                <div className='border rounded-3xl p-2 flex gap-5'>
                    <button 
                        onClick={()=>setType("movie")}
                        className={type === "movie" ? "font-bold" : ""}
                    >
                        Movies
                    </button>

                    <button 
                        onClick={()=>setType("tv")}
                        className={type === "tv" ? "font-bold" : ""}
                    >
                        TV
                    </button>

                    <button 
                        onClick={()=>setType("people")}
                        className={type === "people" ? "font-bold" : ""}
                    >
                        People
                    </button>
                </div>
            </div>

            {/* Cards Section */}
            <div className='flex gap-5 overflow-x-auto'>
                {displayData.map((data)=>{

                    const imagePath =
                        type === "people"
                        ? data.profile_path
                        : data.poster_path;

                    const title =
                        type === "movie"
                        ? data.title
                        : data.name;

                    return (
                        <div 
                            key={data.id}
                            className='shrink-0 w-50'
                        >
                            <img 
                                src={`https://image.tmdb.org/t/p/w500${imagePath}`}
                                alt="poster"
                                className='w-full h-75 object-cover rounded-lg'
                            />
                            <p className='truncate mt-2'>{title}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}