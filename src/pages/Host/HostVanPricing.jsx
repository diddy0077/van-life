import React from 'react'
import { useOutletContext } from "react-router-dom";

function HostVanPricing() {
  const {van} = useOutletContext()

  return (
    <div>
      <p className='text-sm'><span className='font-bold text-xl'>${van.price}</span>/day</p>
    </div>
  )
}

export default HostVanPricing