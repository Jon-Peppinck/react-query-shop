import { FC } from 'react';

import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';

import Card from '../components/Card';
import Loader from '../components/Loader';
import { usePhotosData } from '../helpers/queries/usePhotosData';
import { Photo } from '../models/Photo.interface';

const ProductPage: FC = () => {
  let { id } = useParams();

  const photosQuery = usePhotosData();

  if (photosQuery.isLoading) return <Loader />;

  if (photosQuery.isError) return <p>Error: {photosQuery.error.message}</p>;

  const photos: Photo[] = photosQuery.data!;

  const selectedPhoto = photos.find((photo: Photo) => photo.id === +id!)!;

  return (
    <div>
      <Link to='/'>
        <button type='button' className='bg-indigo-500 p-2 text-white'>
          Back to All Products
        </button>
      </Link>
      <div className='flex justify-center'>
        <Card photo={selectedPhoto} />
      </div>
    </div>
  );
};

export default ProductPage;
