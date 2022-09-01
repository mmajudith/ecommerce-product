import SneakerThumbNail from '../SneakerThumbNail/SneakerThumbNail';
import SlideButton from '../SlideButton/SlideButton';
import { ReactComponent as CloseIcon} from '../../assets/icon-close.svg';

interface LightBoxProps {
    showLightboxHandler: () => void
    product: string | undefined
    navigateProducts: (index: number) => void
    globalIndex: number
    setGlobalIndex: React.Dispatch<React.SetStateAction<number>>
}

const LightBox = ({ showLightboxHandler, product,  navigateProducts, globalIndex, setGlobalIndex }: LightBoxProps) => {
    return(
        <div className='bg-black-opacity absolute inset-0 w-full h-screen z-10'>
            <div className='w-[410px] h-full flex flex-col justify-center items-center mx-auto gap-y-6'>
                <CloseIcon onClick={showLightboxHandler} className='close-hover self-end cursor-pointer'/>
                <div className='w-full h-[390px]'>
                    <img className='w-full h-full rounded-xl object-cover' src={product} alt='sneaker'/>
                </div>
                <SneakerThumbNail navigateProducts={navigateProducts} globalIndex={globalIndex} lightbox={'lightbox'}/>
                <SlideButton setGlobalIndex={setGlobalIndex}  globalIndex={ globalIndex} />
            </div>
        </div>
    )
}

export default LightBox;