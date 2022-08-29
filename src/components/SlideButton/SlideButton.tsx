import { ReactComponent as NextIcon} from '../../assets/icon-next.svg';
import { ReactComponent as PrevIcon} from '../../assets/icon-previous.svg';

interface SlideButtonProps {
   mobile?: string
}

const SlideButton = ({ mobile }: SlideButtonProps) => {
   return(
      <div className={`${mobile?`w-[95%] mx-auto inset-x-0`:`w-[410px] top-[41%]`} absolute flex flex-row justify-between items-center`}>
         <div className={`prev-next ${mobile?`left-0 w-9 h-9`:`left-[-20px]  w-10 h-10`}`}>
            <PrevIcon className=''/>
         </div>   
         <div className={`prev-next ${mobile?`right-0 w-9 h-9`:`right-[-20px] w-10 h-10`}`}>
            <NextIcon className=''/>
         </div>
      </div> 
   )
}

export default SlideButton;