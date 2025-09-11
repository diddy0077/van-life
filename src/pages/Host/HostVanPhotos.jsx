import React from 'react'
import { useOutletContext } from "react-router-dom";

function HostVanPhotos() {
  const { van } = useOutletContext()


  return (
    <div>
      <img src={van.imageUrl} alt={van.name} className='w-20 h-20 rounded-md'/>
    </div>
  )
}

export default HostVanPhotos