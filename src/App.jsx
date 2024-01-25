import './App.css';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Store from './components/Store/Store.jsx';
import ItemDetail from './components/ItemDetail/ItemDetail.jsx';
import Contact from './components/Contact/Contact.jsx';
import PurchaseDetail from './components/PurchaseDetail/PurchaseDetail.jsx';
import Checkout from './components/Checkout/Checkout.jsx';
import OrderDetails from './components/OrderDetails/OrderDetails.jsx';
import Info from './components/Info/Info.jsx';
// Subpages · Info
import AboutUs from './components/Info/AboutUs.jsx';
import HowToBuy from './components/Info/HowToBuy.jsx';
import PaymentMethods from './components/Info/PaymentMethods.jsx';
import AboutShipping from './components/Info/AboutShipping.jsx';
import AfterBuying from './components/Info/AfterBuying.jsx';
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
          <Route path='/contacto' element={<Contact />} />
          <Route path='/mi-carrito' element={<PurchaseDetail />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path="/orden/:orderID" element={<OrderDetails />} />
          <Route path="/info" element={<Info />} />
          <Route path="/info/sobre-nosotros" element={<AboutUs />} />
          <Route path="/info/como-comprar" element={<HowToBuy />} />
          <Route path="/info/medios-de-pago" element={<PaymentMethods />} />
          <Route path="/info/sobre-envios" element={<AboutShipping />} />
          <Route path="/info/despues-de-comprar" element={<AfterBuying />} />


        </Routes>
        <Footer />

      </BrowserRouter>
    </CartProvider>
  )
}

export default App