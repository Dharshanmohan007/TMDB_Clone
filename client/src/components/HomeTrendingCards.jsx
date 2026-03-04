import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function HomeCards() {

    const [trending, setTrending] = useState([]);
    const [trendingWeek, setTrendingWeek] = useState([]);
    const [type, setType] = useState("day");

    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=f470f67e0a8d6712635048ad1c07ac53')
        .then((response)=>{
            setTrending(response.data.results)
        })
    },[])

    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=f470f67e0a8d6712635048ad1c07ac53')
        .then((response)=>{
            setTrendingWeek(response.data.results)
        })
    },[])

    const displayData = type === "day" ? trending : trendingWeek;

    return (
        <div className='px-14 my-15 flex flex-col gap-10'>
            <div className='flex items-center gap-5'>
                <h1 className='text-2xl font-bold'>Trending</h1>
                <div className='border rounded-3xl p-3 flex gap-20'>
                    <button 
                        onClick={() => setType("day")}
                        className={type === "day" ? "font-bold" : ""}
                    >
                        Day
                    </button>
                    <button 
                        onClick={() => setType("week")}
                        className={type === "week" ? "font-bold" : ""}
                    >
                        Week
                    </button>
                </div>
            </div>

            <div className='flex gap-5 overflow-x-auto '>
                {displayData.map((data)=>(
                    <div key={data.id} className='shrink-0 w-50'>
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} 
                            alt='movie poster'
                            className='w-full h-75 object-cover rounded-lg'
                        />
                        <p className='truncate mt-2'>{data.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}