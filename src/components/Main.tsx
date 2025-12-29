import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'

import Message from './Message'
import Button from './Button'
import numberData from '../api/numberData'
import { useState } from 'react'

const generateRandomNumber = (): number => {
  console.log('random called');
  return Math.floor(Math.random() * 10)
}

const Main = () => {

  const [numbers, setNumbers] = useState(numberData)
  const { width, height } = useWindowSize()

  const handleRollClick = () => {
    setNumbers(prev =>
      prev.map(num =>
        num.isClicked
          ? num
          : { ...num, number: generateRandomNumber() }
      )
    )
  }

  const handleButtonClicked = (id: number) => {
    console.log('dic clicked');

    setNumbers(prev => {
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
          return { ...num, isClicked: !num.isClicked }
        }

        return num
      })
    })
  }


  const userIsWin = numbers.every(num => num.isClicked)

  const handlePlayAgainClick = () => {
    setNumbers(
      numberData.map(num => ({
        ...num,
        isClicked: false,
        number: generateRandomNumber()
      }))
    )
  }

  return (
    <main>
      {userIsWin && <Confetti width={width} height={height} />}
      <Message />
      <section className='grid grid-cols-3 md:grid-cols-5 gap-5 my-10'>
        {numbers.map((num) => (
          <Button key={num.id} num={num} handleButtonClicked={handleButtonClicked} />
        ))}
      </section>
      <button
        onClick={userIsWin ? handlePlayAgainClick : handleRollClick}
        className='bg-cyan-500 text-zinc-100 p-4 text-2xl w-full rounded-xl tracking-widest font-medium'
      >
        {userIsWin ? 'Play again' : 'Roll'}
      </button>
    </main>
  )
}

export default Main