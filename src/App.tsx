
import Container from './components/main/Container'
import Header from './components/header/Header'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {

  return (
    <>
      <Provider store={store}>
        <header className='fixed w-screen'>
          <Header />
        </header>
        <section className='flex justify-center items-center flex-col pt-30'>

          <Container />
        </section>
        <footer className='w-full flex flex-col text-center text-sm mb-3'>  &copy; 2025 Guitar Guys by Edwin Baquiax. Todos los derechos reservados. </footer>
      </Provider>
    </>
  )
}

export default App
