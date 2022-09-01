import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../../reduxToolKit/features/sneaker/sneakerSlice';
import { ReactComponent as DeleteIcon} from '../../assets/icon-delete.svg';

interface ItemsAddedProps {
    id: number
    product: string
    title: string
    screenWidth: number
    duplicatedItem: {[key: number]: number} | undefined
}

const ItemsAdded = ({ id, product, title, screenWidth, duplicatedItem }: ItemsAddedProps) =>{

    const dispatch = useDispatch()

    return(
        <div className='w-11/12 mx-auto my-6 flex flex-row justify-between items-center'>
            <div className='w-12 h-12 sm:w-16 sm:h-16'>
                <img src={product} alt='sneaker' className='object-cover rounded-md'/>
            </div>
            <div className='text-dark-grayish-blue text-sm xs:text-base'>
                <p>{screenWidth > 639?`Fall ${title}`:`Autumn Limited Edition...`}</p>
                <p>$125.00 x {duplicatedItem?.[id]} 
                    <span className='text-dark-blue font-bold'>
                        {` $${125 * (duplicatedItem?.[id] === undefined ? 0 : duplicatedItem?.[id])}.00`}
                    </span>
                </p>
            </div>
            <DeleteIcon className='cursor-pointer' onClick={() => dispatch(deleteFromCart(id))}/>
        </div>
    )
}

export default ItemsAdded