import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../reduxToolKit/app/store';
import { Products, ScreenWidth } from '../../utils/types/types';

import SneakerDescription from './SneakersDescription/SneakersDescription';
import SneakerThumbNail from '../../components/SneakerThumbNail/SneakerThumbNail';
import LightBox from '../../components/LightBox/LightBox';
import SlideButton from '../../components/SlideButton/SlideButton';

const Sneakers = ({screenWidth}: ScreenWidth) => {
    const [globalIndex, setGlobalIndex] = useState(0);
    const [sneakersCollections, setSneakerCollections] = useState<Products>();
    const [showLightbox, setShowLightBox] = useState(false)

    const { products } = useSelector((state: RootState) => state.sneakers);

    //Function that toggled the products
    const navigateProducts = (index: number) => {
        setGlobalIndex(index);
    }

    const showLightboxHandler = () => {
        setShowLightBox(!showLightbox)
    }
    
    //Filtering out the products based on the globalIndex
    useEffect(() => {
        let product = products.filter((el, index) => {
            return index === globalIndex
        });

        setSneakerCollections(product);
    }, [globalIndex, setSneakerCollections, products]);

    return(
        <main className='w-full h-[90vh] m-auto md:w-10/12 md:h-[85vh]'>
            <>
                {sneakersCollections &&(
                    <div className='w-full h-full mx-auto flex flex-col gap-4 md:flex-row md:justify-between md:items-center md:gap-16 xl:gap-0 xl:w-[950px]'>
                        <div className='w-full h-[45vh] md:h-auto md:w-[340px] lg:w-3/5 xl:w-96 flex flex-col justify-center items-center md:gap-y-6'>
                            <div onClick={screenWidth > 767 ? showLightboxHandler : undefined}
                                className='w-full h-full relative md:static md:h-72 lg:h-96 md:cursor-pointer'
                            >
                                <img className='w-full h-full absolute top-[-20px] md:static md:top-0 object-fill sm:object-contain 
                                    md:object-cover md:rounded-[10px]' src={sneakersCollections[0].product} alt='sneaker'/>
                            </div>
                           
                            {screenWidth > 767 ? (
                                <SneakerThumbNail 
                                    navigateProducts={navigateProducts} 
                                    globalIndex={globalIndex}
                                />
                            ) : (
                                <SlideButton mobile={'mobile'} 
                                    setGlobalIndex={setGlobalIndex} 
                                    globalIndex={ globalIndex}
                                />
                            )}
                        </div>
                        
                        <SneakerDescription 
                            title={sneakersCollections[0].title}
                            description={sneakersCollections[0].description}
                            globalIndex={ globalIndex}
                        />   
                    </div>
                )}
            </>
            <>
                {screenWidth > 767 && showLightbox && (<LightBox 
                    showLightboxHandler={showLightboxHandler}
                    product={sneakersCollections?.[0].product}
                    navigateProducts={navigateProducts}
                    globalIndex={globalIndex}
                    setGlobalIndex={setGlobalIndex}
                />)}
            </>
        </main>
    )
}

export default Sneakers;