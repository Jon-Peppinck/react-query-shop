import { useQuery } from 'react-query';
import Card from './components/Card';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/products.page';
import ProductPage from './pages/product.page';

// function fetchUser(username: string) {
//   return fetch(`https://api.github.com/users/${username}`).then((res) =>
//     res.json()
//   );
// }

// const GithubUser = ({ username }: { username: string }) => {
//   const userQuery = useQuery<any, Error>(['username'], () =>
//     fetchUser(username)
//   );

//   const data = userQuery.data;

//   if (userQuery.isLoading) return <p>Loading...</p>;

//   if (userQuery.isError) return <p>Error: {userQuery.error.message}</p>;

//   return <pre>{JSON.stringify(data, null, 2)}</pre>;
// };

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductsPage />} />
        <Route path=':id' element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
    // <Card />
    // <div className='mx-2 font-extrabold'>
    //   <GithubUser username='Jon-Peppinck' />
    // </div>
  );
}

export default App;
