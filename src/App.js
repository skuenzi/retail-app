// Components
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import ProductDetail from './components/ProductDetail';

// Styles
import GlobalStyles from './components/styles/Global';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <ProductDetail />
      <Routes>
        <Route path='/' element={<ProductsList />}/>
        <Route path='/product/:productId' element={<ProductDetail />}/>
        <Route />
      </Routes>

      
    </Router>
  );
}

export default App;
