import ProductList from './pages/ProductList'
import Home from './pages/Home'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Desc from './components/Desc'
import Navbar from './components/Navbar'

function App () {
  return (
    <Router>
      <Desc />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/productlist' element={<ProductList />} />
        <Route path='/wishlist' element={<Product />} />
      </Routes>
    </Router>
  )
}

export default App
