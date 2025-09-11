import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from "lucide-react"


function VanDetail() {
  const [van, setVan] = useState(null)
  const params = useParams()


  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => {
      return res.json()
      })
      .then((data) => {
        setVan(data.vans)
       
    })
}, [params.id])
  useEffect(() => {
     console.log(van)
  }, [van])
  
  
  return (
    <div>
      
      <section className='p-6'>
        <div className='mb-6 mt-5'>
           <Link to='/vans' className="flex items-center gap-2 text-black">
      <ArrowLeft className="w-5 h-5" />
      <span className='border-b'>Back to all vans</span>
    </Link>
        </div>

        {van ? (<div className='flex flex-col items-start'>
          <img src={van.imageUrl} alt={van.name} className='rounded-md' />
          <p className='my-4 mt-5 py-1 px-4 bg-black text-white rounded-md'>{van.type}</p>
          <p className='font-bold text-2xl mb-2'>{van.name}</p>
          <p><span className='font-bold text-lg'>${van.price}</span>/day</p>
          <p className='text-sm md:text-md md:max-w-2xl my-4'>{van.description}</p>
          <button className='bg-[#FF8C38] w-full p-2 rounded-lg my-2 text-white cursor-pointer'>Rent this van</button>
        </div>) : ( <p>Loading...</p> )}
        
      </section>
    </div>
  )
}

export default VanDetail

