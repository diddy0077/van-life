import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function HostLayout() {
  return (
    <nav className='flex flex-col p-4'>
      <div className='flex gap-6 font-medium'>
        <NavLink to='/host' end className={(obj) => {return obj.isActive ? 'underline text-[#161616] font-bold' : null}}>Dashboard</NavLink>
        <NavLink to='/host/reviews' className={({ isActive }) => `${isActive && 'underline text-[#161616] font-bold'}`}>Reviews</NavLink>
        <NavLink to='/host/host-vans' className={({isActive}) => `${isActive && 'underline text-[#161616] font-bold'}`}>Vans</NavLink>
        <NavLink to='/host/income' className={({isActive}) => `${isActive && 'underline text-[#161616] font-bold'}`}>Income</NavLink>
      </div>
      <Outlet/>
    </nav>
  )
}

export default HostLayout