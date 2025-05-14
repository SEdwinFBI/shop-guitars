
import Container from './components/main/Container'
import Header from './components/header/Header'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {

  return (
    <>
      <Provider store={store}>
        <section className='flex justify-center items-center flex-col'>
          <Header />
          <Container />
        </section>
      </Provider>
    </>
  )
}

export default App
