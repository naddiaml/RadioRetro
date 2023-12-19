import './App.css';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Store from './components/Store/Store.jsx';
import ItemDetail from './components/ItemDetail/ItemDetail.jsx';
import Footer from './components/Footer/Footer.jsx';
import PurchaseDetail from './components/PurchaseDetail/PurchaseDetail.jsx';

import { CartProvider } from './context/CartContext.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <CartProvider>
      <BrowserRouter>
        <Header />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/store/:category' element={<Store />} />
          <Route path='/products/:id' element={<ItemDetail />} />
          <Route path='/purchase' element={<PurchaseDetail />} />

        </Routes>
        <Footer />

      </BrowserRouter>
    </CartProvider>
  )
}

export default App