import React, { FC } from 'react'
import { guitarr } from '../../Context/fetchGuittars'

interface ICard {
  guitarr: guitarr
}

const Card:FC<ICard> = ({guitarr}) => {
  return (
    <div className=' shadow-md rounded-2xl p-4 grid grid-cols-2 '>
      <div className='w-full flex justify-center items-center  '>
        <img className='w-20' src={`../public/img/${guitarr.image}.jpg`} alt="guitarra" />
      </div>
      <div className=''>
        <h2 className='font-bold text-lg'>{guitarr.name}</h2>
        <p className=' text-xs'>{guitarr.description}</p>
        <h1 className='text-amber-500 font-extrabold text-2xl mt-1 mb-1'>${guitarr.price}</h1>
        <button className='bg-black active:bg-gray-700 text-white px-2 py-2 rounded w-full text-xs'>Agregar al carrito </button>
      </div>
    </div>
  )
}

export default Card
