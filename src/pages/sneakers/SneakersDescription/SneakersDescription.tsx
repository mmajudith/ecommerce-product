import Button from '../../../components/Button/Button';
import CartIcon from '../../../assets/icon-cart.svg';
import PlusIcon from '../../../assets/icon-plus.svg';
import MinusIcon from '../../../assets/icon-minus.svg';

interface  SneakerDescriptionProps {
    title: string 
    description: string
}

const SneakerDescription = ({title, description }: SneakerDescriptionProps) => {
    return(
        <div className='w-[90%] md:w-3/4 h-[55vh] mx-auto md:mx-0 md:h-auto xl:w-2/4'>
            <h2 className='font-bold text-sm md:text-base tracking-wider text-orange mb-4'>SNEAKER COMPANY</h2>
            <p className='font-extrabold text-3xl xl:text-4xl text-dark-blue mb-5 md:mb-7'>Fall {title}</p>

            <div className=''>
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
                        <button className='btn'>
                            <img src={MinusIcon} alt='minus icon' className='hover:opacity-60'/>
                        </button>
                        <button className='h-full cursor-auto text-dark-blue'>0</button>
                        <button className='btn'>
                            <img src={PlusIcon} alt='plus icon' className='hover:opacity-60'/>
                        </button>
                    </div>
                    <Button text={'Add to cart'} Icon={CartIcon}/>
                </div>
            </div>
        </div>
    )
}

export default SneakerDescription