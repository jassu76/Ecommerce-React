import { useState } from 'react'
import Header from './Component/Page/Header'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Component/Page/Home'
import Product from './Component/Page/Product'
import About from './Component/Page/About'
import Contact from './Component/Page/Contact'
import Cart from './Component/Page/Cart'
import SingleProduct from './Component/Page/SingleProduct'
import Footer from './Component/Page/Footer'
function App() {
 

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Product" element={<Product/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/singleProduct/:id" element={<SingleProduct/>} />
        <Route path="/Contect" element={<Contact/>} />
        <Route path="/cart" element={<Cart/>} />
        
      </Routes>
      <Footer />

       
    </>
  )
}

export default App
