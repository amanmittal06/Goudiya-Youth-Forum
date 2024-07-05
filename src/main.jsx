import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider,  createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Newsletter from './Components/NewsLetter/NewsLetter.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About us/About.jsx'
import SignUp from './Components/Sign up/SignUp.jsx'
import Store from './Components/Store/Store.jsx'

const router = createBrowserRouter([
  {path:"/", element: <App/>, children: [
    {path: "/", element:<Home></Home>},
    {path:"/newsletter", element: <Newsletter/>},
    {path:"/store" , element: <Store></Store>},
    {path:"/about-us", element:<About></About>}
  ]},
  {path:"/sign-up", element: <SignUp></SignUp>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
