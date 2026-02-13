import React from 'react'
import {Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div >
      <div className='flex item-center gap-5 border-b pl-38 py-3 '>
        <Search className='h-5'/>
        <input
          className='outline-none w-full'
          placeholder='Search for Movies, TV Shows, Peoples...'/>
      </div>
    </div>
  )
}
