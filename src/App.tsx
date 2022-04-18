import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ProductsPage from './pages/products.page';
import ProductPage from './pages/product.page';
import Layout from './components/Layout';
import ManagePage from './pages/manage.page';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<ProductsPage />} />
          <Route path='management' element={<ManagePage />} />
          <Route path=':id' element={<ProductPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
