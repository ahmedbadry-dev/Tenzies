import ReactLogo from '../assets/react.svg'
const Setup = () => {

  const name: string = 'ahmed'
  console.log(name);
  
  return (
    <div>
      <p>{name}</p>
      <p>{name}</p>
      <p>{name}</p>
      <p>{name}</p>
      <img src={ReactLogo} alt="react img" />
    </div>
  )
}

export default Setup
