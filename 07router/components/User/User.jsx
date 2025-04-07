import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
  const {id} = useParams()
  return (
    <div className='bg-gray-700 text-white text-center rounded-lg text-2xl m-8 p-4'>User: {id}</div>
  )
}

export default User