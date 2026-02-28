import React, {useState, useEffect } from 'react'
import axios from 'axios'

export default function HomeCards() {
    const [trending, setTrending] = useState([]);
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=f470f67e0a8d6712635048ad1c07ac53')
        .then((response)=>{setTrending(response.data.results)})
    },[])
  return (
    <div className='flex '>
        {trending.map((datas)=>(
            <div className='flex flex-col'>
                <img src={`https://image.tmdb.org/t/p/w500${datas.poster_path}`} alt='movie poster image'/>
                <p>{datas.title}</p>
            </div>
        ))}
    </div>
  )
}
