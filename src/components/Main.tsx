
import Message from './Message'
import Button from './Button'
import numberData from '../api/numberData'
import { useEffect, useState } from 'react'
const Main = () => {

  const [numbers, setNumber] = useState(numberData)
  const [UserIsWin, setUserIsWin] = useState(false)

  const generateRandomNumber = (): number => {
    return Math.floor(Math.random() * 10)
  }

  const handleRollClick = () => {
    setNumber(prev => prev.map(num => (
      {
        ...num,
        number: !num.isClicked ? generateRandomNumber() : num.number
      }
    )))
  }
  const handleButtonClicked = (id: number) => {
    setNumber(prev => {
      // get the first number value 
      const firstClicked = prev.find(n => n.isClicked)

      return prev.map(num => {
        // if number not the number we are clicked on it
        if (num.id !== id) return num

        // if no value in firstClicked variable this mean this number is first number is clicked
        if (!firstClicked) {
          return { ...num, isClicked: true }
        }

        // if we have firstClicked already so we need check if number value for this click btn now === firstClicked value
        if (num.number === firstClicked.number) {
          return { ...num, isClicked: true }
        }

        return num
      })
    })
  }

  const isWin = () => {
    return numbers.every(num => (
      num.isClicked === true
    ))
  }

  useEffect(() => {
    isWin() ? setUserIsWin(true) : null
  }, [numbers])

  return (
    <main>
      <Message />
      <section className='grid grid-cols-5 gap-5 my-10'>
        {numbers.map((num) => (
          <Button key={num.id} num={num} handleButtonClicked={handleButtonClicked} />
        ))}
      </section>
      {!UserIsWin ? <button
        onClick={handleRollClick}
        className='bg-cyan-500 text-zinc-100 p-4 text-2xl w-full rounded-xl tracking-widest font-medium'
      >
        Roll
      </button>
        :
        <button
          onClick={handleRollClick}
          className='bg-cyan-500 text-zinc-100 p-4 text-2xl w-full rounded-xl tracking-widest font-medium'
        >
          play again
        </button>
      }
    </main>
  )
}

export default Main