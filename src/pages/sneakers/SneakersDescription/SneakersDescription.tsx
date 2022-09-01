import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../reduxToolKit/features/sneaker/sneakerSlice'
import Button from '../../../components/Button/Button';
import CartIcon from '../../../assets/icon-cart.svg';
import PlusIcon from '../../../assets/icon-plus.svg';
import MinusIcon from '../../../assets/icon-minus.svg';

interface  SneakerDescriptionProps {
    title: string 
    description: string
    globalIndex: number
}

const SneakerDescription = ({title, description, globalIndex}: SneakerDescriptionProps) => {

    const dispatch = useDispatch();
    const [ quatity, setQuatity ] = useState(0);

    const incrementQuatity = () =>{
        setQuatity(prev => prev + 1)
    }

    const decrementQuatity = () =>{
        setQuatity(prev => prev === 0 ? prev : prev - 1)
    }

    //Dispatching add to cart based on the count quatity value
    const addProductToCart = () =>{
        if(quatity < 1) dispatch(addToCart(globalIndex))

        for(let i = 0; i < quatity; i++){
            dispatch(addToCart(globalIndex))
        }
    }

    return(
        <div className='w-[90%] md:w-3/4 h-[55vh] mx-auto md:mx-0 md:h-auto xl:w-2/4'>
            <h2 className='font-bold text-sm md:text-base tracking-wider text-orange mb-4'>SNEAKER COMPANY</h2>
            <p className='font-extrabold text-3xl xl:text-4xl text-dark-blue mb-5 md:mb-7'>Fall {title}</p>
            <p className='text-sm text-dark-grayish-blue md:w-[94%] lg:w-4/5 mb-5'>{description}</p>
            <div className='flex flex-row justify-between md:flex-col md:justify-start'>
                <p className='mb-1'>
                    <span className='font-extrabold pr-4 text-xl'>$125.00</span>
                    <span className='text-xs font-bold text-orange bg-pale-orange px-1.5 py-px rounded'>50%</span>
                </p>
                <p className='text-sm text-grayish-blue line-through'>$250.00</p>
            </div>

            <div className='w-full h-auto mt-5 pb-10 md:pb-0 flex flex-col justify-center sm:flex-row sm:justify-between items-center gap-3'>
                <div className='bg-light-grayish-blue font-bold rounded-md w-full sm:w-1/3 h-11 flex flex-row justify-around items-center'>
                    <button onClick={decrementQuatity} className='btn'>
                        <img src={MinusIcon} alt='minus icon' className='hover:opacity-60'/>
                    </button>

                    <button className='h-full cursor-auto text-dark-blue'>{quatity}</button>

                    <button onClick={incrementQuatity} className='btn'>
                        <img src={PlusIcon} alt='plus icon' className='hover:opacity-60'/>
                    </button>
                </div>

                <Button text={'Add to cart'} Icon={CartIcon} addProductToCart={addProductToCart} notCart={'notcart'}/>
            </div>
        </div>
    )
}

export default SneakerDescription