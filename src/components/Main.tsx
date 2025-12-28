
import Message from './Message'
import Button from './Button'
// import NumberData from '../api/numberData'
const Main = () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <main>
      <Message />
      <section className='grid grid-cols-5 gap-5 my-10'>
        {arr.map((num) => (
          <Button key={num} num={Math.floor(Math.random() * arr.length)} />
        ))}
      </section>
      <button
        className='bg-cyan-500 text-zinc-100 p-4 text-2xl w-full rounded-xl tracking-widest font-medium'
      >
        Roll
      </button>
    </main>
  )
}

export default Main