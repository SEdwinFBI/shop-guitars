import { FC } from "react"
import { guitar } from "../../Context/fetchGuittars"

type itemCartProps = {
    item: { guitar: guitar, quantity: number }
    handleDecrement: (id: number) => void,
    handleDelete: (id: number) => void,
    handleIncrement: (id: number) => void,
}


const ItemCart: FC<itemCartProps> = ({ item, handleDecrement, handleDelete, handleIncrement }) => {
    return (
        <div className=' w-full  grid grid-cols-5 text-xs mt-2  '>

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
}

export default ItemCart
