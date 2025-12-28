
type ButtonProps = {
    num: number
}

const Button = ({ num }: ButtonProps) => {
    return (
        <button
            className="block bg-zinc-100 shadow cursor-pointer text-3xl p-4 px-5 rounded-xl font-medium "
        >{num}</button>
    )
}

export default Button