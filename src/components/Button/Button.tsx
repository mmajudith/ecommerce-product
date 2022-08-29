interface ButtonProps {
    text: string
    Icon?: string
}

const Button = ({text, Icon}: ButtonProps) => {
    return(
        <div className='w-full md:w-2/3 h-11'>
            <button className='w-full h-full text-sm shadow-2xl shadow-orange font-semibold text-white 
                rounded-md bg-orange flex flex-row justify-center items-center gap-4 hover:opacity-60'>
                <img src={Icon} alt='cart icon' className='brightness-0 invert w-4 h-3'/>
                <p>{text}</p>
            </button>
        </div>
    )
}

export default Button;