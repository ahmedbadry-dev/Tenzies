
import Header from './components/Header'
import Main from './components/Main'
import './css/index.css'


function App() {

  return (
    <div className='flex flex-col justify-center h-dvh p-10 max-w-2xl m-auto font-display'>
      <div className='bg-zinc-200 p-10 rounded-2xl'>
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default App
