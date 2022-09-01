import { useSelector } from 'react-redux';
import { RootState } from '../../reduxToolKit/app/store';
import { Products } from '../../utils/types/types';
import { ReactComponent as NextIcon} from '../../assets/icon-next.svg';
import { ReactComponent as PrevIcon} from '../../assets/icon-previous.svg';

interface SlideButtonProps {
   mobile?: string
   setGlobalIndex: React.Dispatch<React.SetStateAction<number>>
   globalIndex: number
}

const SlideButton = ({ mobile, setGlobalIndex,globalIndex}: SlideButtonProps) => {

   const { products } = useSelector((state: RootState) => state.sneakers);

   const nextProducts = (products: Products) =>{
      if(products[globalIndex]){
            setGlobalIndex(prev => products.length - 1 === prev ? prev : prev + 1)
      }
   }

   const prevProducts = (products: Products) =>{
      if(products[globalIndex]){
            setGlobalIndex(prev => products.indexOf(products[globalIndex]) === 0 ? prev : prev - 1)
      }
   }

   return(
      <div className={`${mobile?`w-[95%] mx-auto inset-x-0`:`w-[410px] top-[41%]`} absolute flex flex-row justify-between items-center`}>
         <div onClick={() => prevProducts(products)} className={`prev-next ${mobile?`left-0 w-9 h-9`:`left-[-20px]  w-10 h-10`}`}>
            <PrevIcon />
         </div>   
         <div onClick={() => nextProducts(products)} className={`prev-next ${mobile?`right-0 w-9 h-9`:`right-[-20px] w-10 h-10`}`}>
            <NextIcon />
         </div>
      </div> 
   )
}

export default SlideButton;