import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Newsletter from './Components/NewsLetter/NewsLetter.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About us/About.jsx'
import Store from './Components/Store/Store.jsx'
import AllVolumes from './Components/NewsLetter/AllVolumes.jsx'
import ScrollToTop from './Components/ScrollToTop.jsx'
import RegistrationForm from './Components/Home/RegistrationForm.jsx'
import MyOrders from './Components/Store/MyOrders.jsx'
import AllOrders from './Components/Store/AllOrders.jsx'
import { Auth0Provider } from '@auth0/auth0-react'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-y6rwbvo0s0fei8p3.us.auth0.com"
    clientId="hYomYOZK9E8UmTTf05iejxCpQmY88EhR"
    authorizationParams={{
      redirect_uri: 'https://www.gyf.org.in/store'
    }}
  > 
    <BrowserRouter basename=''> 
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='newsletter' element={<Newsletter />} />
          <Route path='about-us' element={<About />} />
        </Route>
        <Route path='/store' element={<Store />} />
        <Route path='/newsletter/archives' element={<AllVolumes/>} />
        <Route path='/register' element={<RegistrationForm />} />
        <Route path='/orders' element={ <MyOrders/> } />
        <Route path='/allorders' element={ <AllOrders/> } />
      </Routes>
    </BrowserRouter>  
    </Auth0Provider>
  </React.StrictMode>,
)
