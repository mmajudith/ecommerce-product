import { ReactComponent as CloseMenu } from '../../assets/icon-close.svg';

interface NavItemsProps {
    toggleMenuHandler: () => void,
    toggleMenu: boolean
}

const NavItems = ({ toggleMenuHandler, toggleMenu }: NavItemsProps) => {
    return(
        <div className={`h-screen w-screen bg-black-opacity absolute inset-0 z-10 md:z-10 ${toggleMenu?`block`:`hidden`} 
            md:block md:bg-white md:h-full md:static md:w-fit`}>
            <div className='h-full w-8/12 bg-white'>
                <div className='ml-[6%] pt-6 pb-7 md:hidden'>
                    <CloseMenu onClick={toggleMenuHandler} className='cursor-pointer'/>
                </div>
                <ul className='w-fit ml-[6%] flex flex-col gap-y-6 text-dark-blue md:text-dark-grayish-blue font-bold
                        text-base md:font-medium md:ml-[0%] md:h-full md:flex-row md:gap-x-6 md:gap-y-6'>
                {[
                    ['Collections'],
                    ['Men'],
                    ['Women'],
                    ['About'],
                    ['Contact'],
                ].map(([list, url], index) => (
                    <li className='h-full cursor-pointer flex flex-col
                    justify-start md:justify-center md:items-center hover:md:border-b-2 hover:md:h-[102%] 
                    hover:md:border-orange hover:md:border-solid hover:text-dark-blue' key={index}>
                        {list}
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
} 

export default NavItems;