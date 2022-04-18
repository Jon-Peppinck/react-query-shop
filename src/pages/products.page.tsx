import { FC } from 'react';

import { useQuery } from 'react-query';

import Item from '../components/Item';
import Loader from '../components/Loader';
import { Photo } from '../models/Photo.interface';
import { usePhotosData } from '../helpers/queries/usePhotosData';

const ProductsPage: FC = () => {
  const photosQuery = usePhotosData();

  if (photosQuery.isLoading) return <Loader />;

  if (photosQuery.isError) return <p>Error: {photosQuery.error.message}</p>;

  const photos = photosQuery.data;

  return (
    <div className='container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow mt-32'>
      <ul className='flex flex-col divide divide-y'>
        {photos?.map((photo: Photo) => (
          <Item key={photo.id} photo={photo} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
