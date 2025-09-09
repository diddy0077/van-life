import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='bg-nav sticky w-full z-[2000] flex items-center justify-between p-6 shadow-md'>
      <Link to='/' className='font-extrabold hover:border-b hover:border-b-2 '>#VANLIFE</Link>
      <div className='flex gap-6 text-gray-700'>
        <Link to='/about'>
          About
        </Link>
        <Link to='/vans'>
          Vans
        </Link>
      </div>
    </div>
  )
}

export default Nav