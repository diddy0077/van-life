import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Vans() {
  const [vans, setVans] = useState([])
  const filters = ['Simple', 'Luxury', 'Rugged']
  
  useEffect(() => {
    fetch('/api/vans')
      .then((res) => {
      return res.json()
      })
      .then((data) => {
      return setVans(data.vans)
      })
    .catch ((error) => {
      console.log('Error fetching vans',error)
    })
  }, [])



  return (
    <div className='bg-nav min-h-screen'>
      <section className='p-6 pt-9'>
        <h1 className='font-bold text-2xl'>Explore our van options</h1>
        <div className='flex items-center justify-between mt-3'>
          <div className='flex gap-3 '>
            {filters.map((item, index) => {
              return <span key={index} className='bg-[#FFEAD0] p-1 px-3 rounded text-sm'>{item}</span>
            })}
          </div>
          <button className='text-sm underline cursor-pointer'>Clear filters</button>
        </div>
      </section>

      <section className='grid grid-cols-2 md:grid-cols-3 p-5 gap-6'>
        {vans.map((van) => {
          return <Link to={`/vans/${van.id}`} aria-label={`View details for ${van.name}, 
                             priced at $${van.price} per day`}>
            <div >
            <img src={van.imageUrl} alt={van.name} className='rounded-lg' loading='lazy'/>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col gap-1 mt-2 items-start'>
               <p className='whitespace-nowrap text-sm font-bold'>{van.name}</p>
               <p className='bg-black px-3 py-1 rounded-md text-white'>{van.type}</p>
             </div>
             <p className='whitespace-wrap font-bold'>${van.price}<br/> <span className='text-xs font-semibold'>/day</span> </p>
            </div>
                 </div>
          </Link>
        })}
      </section>
    </div>
  )
}

export default Vans