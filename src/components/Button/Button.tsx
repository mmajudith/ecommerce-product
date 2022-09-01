interface ButtonProps {
    text: string
    Icon?: string
    addProductToCart?: () => void
    notCart?: string
}

const Button = ({text, Icon, addProductToCart, notCart }: ButtonProps) => {
    return(
        <div onClick={addProductToCart} className={`h-11 ${notCart ? `w-full md:w-2/3`:`w-11/12 mx-auto`}`}>
            <button className={`w-full h-full text-sm ${notCart?`shadow-2xl shadow-orange`:`shadow-none`} font-semibold text-white 
                rounded-md bg-orange flex flex-row justify-center items-center gap-4 hover:opacity-60 outline-none border-none`
            }>
                {notCart && (<img src={Icon} alt='cart icon' className='brightness-0 invert w-4 h-3'/>)}
                <p>{text}</p>
            </button>
        </div>
    )
}

export default Button;