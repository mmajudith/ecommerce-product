import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reduxToolKit/app/store';
import { Products, ScreenWidth } from '../../utils/types/types';
import ItemsAdded from '../ItemsAdded/ItemsAdded';
import Button from '../Button/Button';
import Avatar from '../../assets/image-avatar.png';
import { ReactComponent as CartIcon } from '../../assets/icon-cart.svg';

const Cart = ({screenWidth}:ScreenWidth) => {

    const { addedToCart } = useSelector((state: RootState) => state.sneakers);
    
    const [toggleCart, setToggleCart] = useState<boolean>(false);
    const [itemsAdded, setItemAdded] = useState<Products>();
    const [duplicatedItem, setDuplicatedItem] = useState<{[key: number]: number}>()
    const [quatity, setQuatity] = useState(0);

    //Toggle cart function
    const toggleCartHandler = () => {
        setToggleCart(!toggleCart);
    }

    //Getting the unique product from the array
    useEffect(() =>{
        let uniqueItems = Array.from(new Set(addedToCart));
        let itemslength = addedToCart.length;

        setItemAdded(uniqueItems.reverse());
        setQuatity(itemslength);

    }, [addedToCart, quatity]);

    //Checking for duplicated products in the cart
    useEffect(() =>{
        let duplicated:{[key: number]: number} = {};

        addedToCart.map(({id}) => id).forEach(x => duplicated[x] = (duplicated[x] || 0) + 1)
        setDuplicatedItem(duplicated)
    }, [addedToCart]);

    return(
        <>
            <div className='flex items-center gap-x-[20px] md:gap-x-10'>
                <div className='relative'>
                    {quatity === 0 ? 
                        (<span>{""}</span> 
                        ) : (
                        <span className='absolute top-[-40%] right-[-30%] bg-orange px-2 py-0 rounded-xl text-white text-[10px] font-semibold'>
                            {quatity}
                        </span>
                    )}
                    <CartIcon onClick={toggleCartHandler} className='cursor-pointer header-cart'/>
                </div>
                <img src={Avatar} alt='user profile' className='cursor-pointer w-7 md:w-10 rounded-3xl hover:border-2 hover:border-orange hover:border-solid'/>
            </div>
            {toggleCart && (
                <div className='w-[96%] mx-auto absolute inset-x-0 top-[112%] bg-white rounded-lg shadow-2xl z-0 md:z-10
                    sm:w-[350px] sm:mr-0 sm:top-[80%] sm:right-2 md:right-[-3%] xl:right-[-63px]'>
                    <div className='w-full h-12 border-b border-[#ddd] border-solid font-bold text-dark-blue'>
                        <p className='w-11/12 h-full mx-auto flex flex-col justify-center'>Cart</p>
                    </div>
                    
                    {itemsAdded?.length ?(   
                        <div className='w-full h-auto mb-7'> 
                            {itemsAdded.map((item, index) => (
                                <ItemsAdded key={index} id={item.id} 
                                    product={item.productThumbNail} title={item.title}  
                                    screenWidth={screenWidth}
                                    duplicatedItem={duplicatedItem}
                                />
                            ))}
                            <Button text={'Checkout'} />
                        </div>
                    ) : (
                        <div className='w-full h-44 flex flex-col justify-center items-center font-semibold text-dark-grayish-blue'>
                            <p>Your Cart is empty.</p>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default Cart