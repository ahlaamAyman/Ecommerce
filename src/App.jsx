import { useState } from 'react'

import './App.css'
import TopHeader from './component/Header/TopHeader'
import BtmHeader from './component/Header/BtmHeader'
import Home from './page/Home/Home'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './page/productDetails/ProductDetails'
import Cart from './page/cart/Cart'
import { Toaster } from 'react-hot-toast'
import ScrollToTop from './component/ScrollToTop'
import { AnimatePresence } from 'framer-motion'
import CategoryPage from './page/CategoryPage/CategoryPage'


function App() {
  return (
    <>
      <header className="app-shell">
        <TopHeader />
        <BtmHeader />
      </header>

      <Toaster position='bottom-right' toastOptions={{
        style: {
          background: '#e9e9e9',
          borderRadius: '5px',
          padding: '14px'

        }
      }} />

      <ScrollToTop />

      <AnimatePresence mode='wait'>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/category/:category' element={<CategoryPage />} />


        </Routes>
      </AnimatePresence>


    </>
  )
}

export default App
