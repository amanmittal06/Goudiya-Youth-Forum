import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, RouterProvider,  createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Newsletter from './Components/NewsLetter/NewsLetter.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About us/About.jsx'
import SignUp from './Components/Sign up/SignUp.jsx'
import Store from './Components/Store/Store.jsx'

// const router = createBrowserRouter({
//   basename: "/Goudiya-Youth-Forum/",
//   routes: [
//     {path:"/", element: <App/>, children: [
//       {path: "/", element:<Home></Home>},
//       {path:"/newsletter", element: <Newsletter/>},
//       {path:"/store" , element: <Store></Store>},
//       {path:"/about-us", element:<About></About>}
//     ]},
//     {path:"/sign-up", element: <SignUp></SignUp>}
//   ]
// })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router.routes}><App></App></RouterProvider> */}
    <BrowserRouter basename="/"> {/* Replace with your base URL */}
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="newsletter" element={<Newsletter />} />
          <Route path="store" element={<Store />} />
          <Route path="about-us" element={<About />} />
        </Route>
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
