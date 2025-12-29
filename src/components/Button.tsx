
type ButtonProps = {
    num: {
        id: number,
        isClicked: boolean,
        number: number
    },
    handleButtonClicked(id: number): void
}

const Button = ({ num, handleButtonClicked }: ButtonProps) => {

    return (
        <button
            onClick={() => handleButtonClicked(num.id)}
            className={`
                ${num.isClicked ? "bg-green-400" : 'bg-zinc-600 text-zinc-950'}
                block  shadow cursor-pointer text-3xl p-4 px-5 rounded-xl font-medium last-of-type:col-span-3 md:last-of-type:col-span-1`}
        >{num.number}</button>
    )
}

export default Button