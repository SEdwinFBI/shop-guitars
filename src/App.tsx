
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
      </Provider>
    </>
  )
}

export default App
