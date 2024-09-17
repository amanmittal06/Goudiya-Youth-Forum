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
import { GoogleOAuthProvider } from '@react-oauth/google';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <GoogleOAuthProvider  clientId="269312667183-gpijj1vp2m0l7im2ma7o3dp7ok2enhi0.apps.googleusercontent.com"> 
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
      </Routes>
    </BrowserRouter>
  </GoogleOAuthProvider>  
  </React.StrictMode>,
)
