import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ProductsPage from './pages/products.page';
import ProductPage from './pages/product.page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductsPage />} />
        <Route path=':id' element={<ProductPage />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
