

import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
//   const [data, setData] = useState([])
//   useEffect(() => {
//     fetch('https://api.github.com/users/HiPrabel')
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       setData(data)
//     })
//   }, [])

  const data = useLoaderData()

  return (
    <div className='text-center flex flex-col-reverse m-4 mx-40 bg-gray-600 text-white p-4 text-3xl rounded-lg'>Github followers: {data.followers}
    <img className='rounded-2xl m-2 ' src={data.avatar_url} alt="Git picture" width={300} />
    <p>{data.login}</p>
    </div>
  )

}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/HiPrabel')
  return response.json()
}