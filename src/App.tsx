
import Header from './components/Header'
import Main from './components/Main'
import './css/index.css'


function App() {

  return (
    <div className='flex flex-col bg-zinc-800 md:bg-zinc-900 justify-center items-center h-dvh font-display text-zinc-200'>
      <div className='bg-zinc-800 p-10 rounded-2xl max-w-2xl'>
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default App
