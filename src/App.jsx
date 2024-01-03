import './App.css';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Store from './components/Store/Store.jsx';
import ItemDetail from './components/ItemDetail/ItemDetail.jsx';
import PurchaseDetail from './components/PurchaseDetail/PurchaseDetail.jsx';
import Checkout from './components/Checkout/Checkout.jsx';
import Footer from './components/Footer/Footer.jsx';

import { CartProvider } from './context/CartContext.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <CartProvider>
      <BrowserRouter>
        <Header />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/tienda' element={<Store />} />
          <Route path='/tienda/:category' element={<Store />} />
          <Route path='/tienda/:category/:id' element={<ItemDetail />} />
          <Route path='/mi-carrito' element={<PurchaseDetail />} />
          <Route path='/checkout' element={<Checkout />} />

        </Routes>
        <Footer />

      </BrowserRouter>
    </CartProvider>
  )
}

export default App