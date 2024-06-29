import React from 'react'
import './App.css'
import Header from '../src/components/Header/header'
import Homescreen from './components/Screens/Homescreen/homescreen'
import Login from '../src/components/Screens/Login/login'
import Error from '../src/components/Screens/Error/error'
import Product from '../src/components/Screens/Products/products'
import Contacts from '../src/components/Screens/Contact/contact'
import Testimonials from '../src/components/Screens/Testimonials/testimonial'
import About from '../src/components/Screens/AboutUs/aboutUs'
import Order from '../src/components/Screens/Order/order'
import { BrowserRouter, RouterProvider, Routes, Route, createBrowserRouter, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function App() {

  var loggedState = useSelector((state) => state.logged.value)
  

  const router = createBrowserRouter([
    {
      path:'/', 
      element:  <Homescreen /> 
    },
    {
      path:'/login', element:(<Login />)
    },
    {
      path:'/error', element:(<Error />)
    },
    {
      path:'/product',
      element: loggedState ? <Product /> : <Homescreen />

    },
    {
      path:'/contacts',
      element: loggedState ? <Contacts /> : <Homescreen />
    },
    {
      path:'/testimonials',
      element: loggedState ? <Testimonials /> : <Homescreen />
    },
    {
      path:'/about',
      element: loggedState ? <About /> : <Homescreen />
    },
    {
      path:'/product/order', element:(<Order />)
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          loggedIn ?  <Route path="/" element={<Homescreen />} /> : <Route path="/login" element={<Login />} />
          loggedIn ?  <Route path="/contacts" element={<Contacts />} /> : <Route path="/login" element={<Login />} />
          <Route path="/product">
            { loggedState ? <Product /> : navigate('login') }
          </Route>
          loggedIn ?  <Route path="/testimonials" element={<Testimonials />} /> : <Route path="/login" element={<Login />} />
          loggedIn ?  <Route path="/about" element={<About />} /> : <Route path="/login" element={<Login />} />
          loggedIn ?  <Route path="/product/order" element={<Order />} /> : <Route path="/login" element={<Login />} />
          <Route path="/error" element={<Order />} />
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
