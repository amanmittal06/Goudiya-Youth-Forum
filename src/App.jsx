import Footer from './Components/Footer'
import Header from './Components/Header'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return(
    <div className='app'>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
  
}

export default App
