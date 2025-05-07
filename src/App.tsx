
import { useState } from 'react'
import Container from './components/main/Container'
import Header from './components/header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
     <section className='flex justify-center items-center flex-col'>
      <Header/>
      <Container/>
    </section>
  )
}

export default App
