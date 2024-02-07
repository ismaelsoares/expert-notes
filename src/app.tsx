import logo from './assets/logo-nlw-expert.svg'

export function App() {
  return (
    <div className='mx-auto'>
      <img src={logo} alt="logo" />
      <input type="text" placeholder='Busque em suas notas' />
    </div>
  )
}

