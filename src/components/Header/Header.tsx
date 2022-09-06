import { useState } from 'react'
import { ScreenWidth } from '../../utils/types/types';
import NavItems from '../NavItems/NavItems';
import Cart from '../Cart/Cart';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as OpenItems } from '../../assets/icon-menu.svg'

const Header = ({screenWidth}:ScreenWidth) => {

    const [toggleMenu, setToggleMenu] = useState<boolean>(false);

    //Toggle menu function
    const toggleMenuHandler = () =>{
        setToggleMenu(!toggleMenu)
    }

    return(
        <header className='w-full h-[10vh] relative bg-white z-10 md:h-[15vh] flex flex-col justify-center items-center'>
            <nav className='w-[90%] h-full md:relative flex flex-row justify-between items-center md:border-b md:border-[#ddd] md:border-solid xl:w-[1100px]'>
                <div className='h-full flex items-center gap-x-12'>
                    <div className='flex items-center'>
                        <OpenItems onClick={toggleMenuHandler} className='cursor-pointer mr-[12px] md:mr-0 md:hidden'/>
                        <Logo className='mb-1'/>
                    </div>
                    <NavItems toggleMenuHandler={toggleMenuHandler} toggleMenu={toggleMenu}/>
                </div>
                <Cart screenWidth={screenWidth}/>
            </nav>
        </header>
    )
}

export default Header;