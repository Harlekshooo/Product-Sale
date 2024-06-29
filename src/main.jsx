import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import userReducer from '../src/Slices/UserSlice.jsx'
import userLog from '../src/Slices/IsLoggedIn.jsx'
import productDetails from '../src/Slices/ProductSlice.jsx'
import userPrice from '../src/Slices/PriceSlice.jsx'
import userProduct from '../src/Slices/ProductName.jsx'
import userImage from '../src/Slices/ImageSlice.jsx'

const store = configureStore({
  reducer: {
    user: userReducer,
    logged: userLog,
    product: productDetails,
    price: userPrice,
    productName: userProduct,
    imageName: userImage,
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
)
