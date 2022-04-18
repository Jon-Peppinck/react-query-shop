import { FC, useState, useEffect } from 'react';
import { useQueryClient } from 'react-query';

import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';

import Card from '../components/Card';
import Loader from '../components/Loader';
import { usePhotosData } from '../helpers/queries/usePhotosData';
import { Comment } from '../models/Comment.interface';
import { Photo } from '../models/Photo.interface';

const ProductPage: FC = () => {
  const queryClient = useQueryClient();

  let { id } = useParams();

  const [comment, setComment] = useState<Comment | {}>({});

  useEffect(() => {
    let cachedComment: Comment | undefined = queryClient.getQueryData([
      'comment',
      +id!,
    ]);

    const setCommentCache = async (id: number) => {
      if (!cachedComment) {
        // DRY - also in products.page - consider moving higher
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/comments/${id}`
        );
        const commentJson: Comment = await response.json();

        queryClient.setQueryData(['comment', +id!], () => commentJson);

        setComment(() => commentJson);
      } else {
        setComment(() => cachedComment);
      }
    };

    setCommentCache(+id!);
  }, [id, queryClient]);

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
      <div className='mt-8'>
        <h2 className='text-2xl'>Comments</h2>
        {Object.keys(comment).length > 0 && (
          <p>
            {(comment as Comment).name}: {(comment as Comment).body}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
