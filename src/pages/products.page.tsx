// Order imports

// React imports
import { FC } from 'react';

// Third party imports
import { useQueryClient } from 'react-query';

// App imports
import Item from '../components/Item';
import Loader from '../components/Loader';
import { Photo } from '../models/Photo.interface';
import { usePhotosData } from '../helpers/queries/usePhotosData';

const ProductsPage: FC = () => {
  const queryClient = useQueryClient();

  const photosQuery = usePhotosData();

  if (photosQuery.isLoading) return <Loader />;

  if (photosQuery.isError) return <p>Error: {photosQuery.error.message}</p>;

  const photos = photosQuery.data;

  const prefetchExtraData = (photoId: number) => {
    // Get a single unique comment based on photo Id to practice pre-fetching
    const commentId = photoId;

    queryClient.prefetchQuery(['comment', commentId], () =>
      fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`).then(
        (res) => {
          return res.json();
        }
      )
    );
  };

  return (
    <>
      <h1 className='text-4xl mb-4'>All Products</h1>
      <div className='container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow'>
        <ul className='flex flex-col divide divide-y'>
          {photos?.map((photo: Photo) => (
            <div
              key={photo.id}
              onMouseEnter={() => prefetchExtraData(photo.id)}
            >
              <Item photo={photo} />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductsPage;
