import { useState } from 'react';
import Avatar from '../../assets/image-avatar.png';
import { ReactComponent as CartIcon } from '../../assets/icon-cart.svg';

const Cart = () => {

    const [toggleCart, setToggleCart] = useState<boolean>(false)

    const toggleCartHandler = () => {
        setToggleCart(!toggleCart)
    }

    return(
        <>
            <div className='flex items-center gap-x-5 md:gap-x-10'>
                <CartIcon onClick={toggleCartHandler} className='cursor-pointer header-cart'/>
                <img src={Avatar} alt='user profile' className='cursor-pointer w-7 md:w-10 rounded-3xl hover:border-2 hover:border-orange hover:border-solid'/>
            </div>
            {toggleCart && (
            <div className='w-[96%] mx-auto absolute inset-x-0 top-[112%] bg-white rounded-lg shadow-2xl z-0 md:z-10
                 sm:w-80 sm:mr-0 sm:top-[80%] sm:right-2 md:right-[-3%] xl:right-[-63px]'>
                 <div className='w-full h-12 border-b border-[#ddd] border-solid font-bold text-dark-blue'>
                     <p className='w-11/12 h-full mx-auto flex flex-col justify-center'>Cart</p>
                 </div>
                 
                 <div className='w-full h-44 flex flex-col justify-center items-center font-semibold text-dark-grayish-blue'>
                     <p>Your Cart is empty.</p>
                 </div>
             </div>
            )}
        </>
    )
}

export default Cart