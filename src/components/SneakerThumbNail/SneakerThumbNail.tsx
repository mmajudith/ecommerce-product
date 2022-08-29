import { useSelector } from 'react-redux';
import { RootState } from '../../reduxToolKit/app/store';

interface  SneakerThumbNailProps {
    navigateProducts: (index: number) => void
    globalIndex: number
    lightbox?: string
}

const SneakerThumbNail = ({ navigateProducts, globalIndex, lightbox }: SneakerThumbNailProps) => {

    const { products } = useSelector((state: RootState) => state.sneakers);

    return(
        <div className={`flex justify-between ${lightbox?`w-10/12`:`w-full`}`}>
            {products.map((el, index) =>(
                <div key={index} onClick={() => navigateProducts(index)}
                    className={`${index===globalIndex?`border-2 border-orange border-solid bg-white`:`border-none`} 
                        cursor-pointer w-14 h-14 lg:w-[72px] lg:h-[72px] hover:bg-white rounded-[10px]`}
                >
                    <img className={`${index===globalIndex?`opacity-40`:`opacity-100`} rounded-[10px] w-full h-full hover:opacity-40 object-cover`} 
                        src={el.productThumbNail} alt='product thumbnail'
                    />
                </div>
            ))}
        </div>
    )
}

export default SneakerThumbNail;