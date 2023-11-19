import './App.css';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Store from './components/Store/Store.jsx';
import ItemDetail from './components/ItemDetail/ItemDetail.jsx';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer.jsx';
import Footer from './components/Footer/Footer.jsx';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/store/:category' element={<Store />} />
        <Route path='/products/:id' element={<ItemDetail />} />

      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App