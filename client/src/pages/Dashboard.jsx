import React from 'react'
import SearchBar from '../components/SearchBar'
import Slideshow from '../assets/slideshow.png'

export default function Dashboard() {
  return (
    <div>
      <SearchBar/>
      <img src={Slideshow} alt="slideshow image" className='w-370 pl-14'/>
    </div>
  )
}
