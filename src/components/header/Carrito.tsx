import React, { FC, useEffect } from 'react'
import { fetchGuittars, type guitarr } from '../../Context/fetchGuittars'


type CarritoProps = {


}



const Carrito: FC = () => {
  const guitarr1: guitarr = fetchGuittars()[0]

  return (
    // <div className='w-full h-full bg-white  rounded-2xl  shadow-2xl' hidden={!hidden} onClick={()=>onHidden(false)} >
    <div className='w-full h-full bg-white  shadow-2xl p-4' >
      <div className='bg-white w-full h-full text-center'>
        <div>
          <div className=''>
            <div className='w-full h-auto grid grid-cols-5 text-xs font-bold  '>
              <h1>Imagen</h1>
              <h1>Nombre</h1>
              <h1>Precio</h1>
              <h1>cantidad</h1>
              <h1>eli</h1>
            </div>
            <hr className='bg-gray-300 mt-2' />
            <div className='max-h-51 w-full overflow-y-auto'>
             {
              Array.from({length:10}).map((_i,index)=>(
                <div key={index } className=' w-full  grid grid-cols-5 text-xs mt-2  '>
                <img className='h-20' src={"../../../public/img/" + guitarr1.image + ".jpg"} alt="guitarra " />
                <h1>{guitarr1.name}</h1>
                <h1><strong>${guitarr1.price}</strong></h1>
                <div className='items-start'>
                  <div className='flex flex-row w-full justify-between  items-center' >
                    <button className='bg-black text-white w-4 h-6 font-extrabold'>
                      +
                    </button>
                    <h1>1</h1>
                    <button className='bg-black text-white w-4 h-6 font-extrabold'>
                      -
                    </button>

                  </div>

                </div>

              </div>
              )
            )
             }
              
            </div>
          </div>
          <div className='text-end'>
          <h1>
            total a pagar: <strong>${guitarr1.price}</strong>
          </h1>
          </div>
        </div>
        <div className=' bg-white py-1'>
          <button className='cursor-pointer w-full h-10 bg-black active:bg-gray-700 text-white'>Comprar ahora!</button>
        </div>
      </div>
    </div>
  )
}

export default Carrito
