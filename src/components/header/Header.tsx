import { useState } from 'react'
import Carrito from './Carrito'

const Header = () => {
    const [show, setShow] = useState(true);


    return (
        <>
            <div className='absolute top-0 z-10 flex  justify-between items-center w-full h-30 px-40'>
                <div className='text-amber-50' >
                    <img className="w-30" src="https://s3.us-west-2.amazonaws.com/sgs.pressable-guitarguys/wp-content/uploads/2020/11/25140810/small_logo.png" alt="logo" />
                </div>

                <div>
                    <img className="w-10 h-8 " src="./img/carrito.png" alt="" onClick={() => setShow((prev) => !prev)} />
                    <div className='w-70 h-auto absolute translate-y-1 -translate-x-5/6' hidden={show} >
                        {/* <div className='flex flex-col w-full h-20 text-center justify-center bg-white'>
                            <h1>carrito vacio</h1>
                        </div> */}
                        <Carrito />
                    </div>
                </div>

            </div>
            <div className='relative w-full h-auto'>
                <img className='w-full h-30 object-cover filter shadow-lg' src="./img/header.jpg" alt="guitarra" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            </div>
        </>
    )
}

export default Header
