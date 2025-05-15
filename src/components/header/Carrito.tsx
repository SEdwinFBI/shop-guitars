import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { decrementItem, deleteToCart, incrementtItem } from '../../store/slice/ShoppingSlice'
import ItemCart from '../cards/ItemCart'


// type CarritoProps = {


// }



const Carrito: FC = () => {

  const dispatch = useDispatch<AppDispatch>()
  const cart = useSelector((state: RootState) => state.shopping)



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
                    <ItemCart
                      key={index}
                      handleDecrement={handleDecrement}
                      handleIncrement={handleIncrement}
                      handleDelete={handleDelete}
                      item={item}
                    />

                  )
                })
              }
              {
                cart.total == 0 && <h1>Carrito vacio..</h1>
              }

            </div>
          </div>
          <div className='text-end'>
                          {
                cart.total != 0 && <h1>
                              total a pagar: <strong>${cart.total}</strong>
                             </h1>
              }
            
          </div>
        </div>
        <div className=' bg-white py-1'>
          <button 
          className='cursor-pointer w-full h-10 bg-black active:bg-gray-700 disabled:bg-gray-700 text-white'
          disabled={cart.total == 0? true:false}
          >Comprar ahora!</button>
        </div>
      </div>
    </div>
  )
}

export default Carrito
