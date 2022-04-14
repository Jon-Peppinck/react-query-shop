import { FC } from 'react';

import { useParams } from 'react-router-dom';

const ProductPage: FC = () => {
  const { id } = useParams();

  return <div>product.page {id}</div>;
};

export default ProductPage;
