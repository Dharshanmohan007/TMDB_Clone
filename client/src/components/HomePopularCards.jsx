import React, {useState, useEffect } from 'react'
import axios from 'axios';

export default function HomePopularCards() {
    const [popular, setPopular] = useState([]);
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/discover/tv?api_key=f470f67e0a8d6712635048ad1c07ac53')
        .then((responce)=>{setPopular(responce.data.results)})        
    },[])
  return (
    <div className='flex'>
        {popular.map((data)=>(
            <div className=''>
                <img className='w-20 ' src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}/>
                <p>{data.name}</p>
            </div>
        ))}
    </div>
  )
}
