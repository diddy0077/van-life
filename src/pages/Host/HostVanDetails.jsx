import React, { useEffect } from 'react'
import { useOutletContext } from "react-router-dom";


function HostVanDetails() {
  const { van } = useOutletContext()
  useEffect(() => {
   console.log(van)
  }, [van])


  return (
    <div className='flex flex-col space-y-4'>
      <p><strong>Name:</strong> {van.name} </p>
      <p><strong>Category:</strong> {van.type} </p>
      <p><strong>Description:</strong>  {van.description}</p>
      <p><strong>Visibility:</strong> Public</p>
    </div>
  )
}

export default HostVanDetails