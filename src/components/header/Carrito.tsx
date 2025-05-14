import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { decrementItem, deleteToCart, incrementtItem } from '../../store/slice/ShoppingSlice'


// type CarritoProps = {


// }



const Carrito: FC = () => {

  const dispatch = useDispatch<AppDispatch>()
  const cart = useSelector((state: RootState) => state.shopping)

  useEffect(() => {
    console.log(cart)
  }, [cart])

  const handleDecrement = (id: number) => {
    dispatch(decrementItem(id))
  }
  const handleIncrement = (id: number) => {
    dispatch(incrementtItem(id))
  }
  const handleDelete = (id: number) => {
    dispatch(deleteToCart(id))
  }
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
              <h1></h1>
            </div>
            <hr className='bg-gray-300 mt-2' />
            <div className='max-h-51 w-full overflow-y-auto'>
              {
                cart.items.map((item, index) => {

                  return (

                    <div key={index} className=' w-full  grid grid-cols-5 text-xs mt-2  '>
                      <img className='h-20' src={"./img/" + item.guitar.image + ".jpg"} alt="guitarra " />
                      <h1>{item.guitar.name}</h1>
                      <h1><strong>${item.guitar.price}</strong></h1>
                      <div className='items-start'>
                        <div className='flex flex-row w-full justify-between  items-center' >
                          <button
                            onClick={() => handleIncrement(item.guitar.id)}
                            className='bg-black  active:bg-gray-700 text-white w-4 h-6 font-extrabold'
                          >
                            +
                          </button>
                          <h1>{item.quantity}</h1>
                          <button
                            onClick={() => handleDecrement(item.guitar.id)}
                            className='bg-black active:bg-gray-700 text-white w-4 h-6 font-extrabold'
                          >
                            -
                          </button>
                        </div>
                      </div>
                      <div className='flex flex-col content-center items-center'>
                        <button
                          onClick={() => handleDelete(item.guitar.id)}
                          className='cursor-pointer w-5 h-5 bg-red-700  active:bg-red-500 rounded-2xl text-white flex justify-center content-center'
                        >
                          <div>x</div>
                        </button>
                      </div>
                    </div>
                  )
                })
              }

            </div>
          </div>
          <div className='text-end'>
            <h1>
              total a pagar: <strong>${cart.total}</strong>
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
