import { FC } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
import { WithChildren } from '../helpers/types/WithChildren';
import { Photo } from '../models/Photo.interface';

type ItemProps = WithChildren<{
  photo: Photo;
}>;

const Item: FC<ItemProps> = ({ photo }: ItemProps) => {
  const queryClient = useQueryClient();

  const removeItem = useMutation(
    (itemId: number) => {
      return fetch(`https://jsonplaceholder.typicode.com/photos/${itemId}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
        },
      }).then((res) => {
        // uncomment to try out rollback

        // throw new Error('random error');
        return res.json();
      });
    },
    {
      onMutate: (itemId) => {
        const oldPhotos = queryClient.getQueryData<Photo[]>(['photos'])!;

        const newPhotos = oldPhotos.filter((photo) => photo.id !== itemId);

        queryClient.setQueryData(['photos'], () => newPhotos);

        return function rollback() {
          queryClient.setQueryData(['photos'], () => oldPhotos);
        };
      },
      onError: (error, variables, rollback: any) => {
        console.error('Something went wrong!');
        rollback();
      },
      // uncomment to invalidate queries

      // onSettled: () => {
      //   queryClient.invalidateQueries(['photos'], { exact: true });
      // },
    }
  );

  return (
    <li className='flex flex-row'>
      <div className='select-none  flex flex-1 items-center p-4'>
        <div className='flex flex-col w-10 h-10 justify-center items-center mr-4'>
          <img
            alt='profile'
            src={photo.thumbnailUrl}
            className='mx-auto object-cover rounded-full h-10 w-10 '
          />
        </div>
        <Link to={`/${photo.id}`}>
          <div className='flex-1 pl-1 mr-16 cursor-pointer'>
            <div className='font-medium dark:text-white'>{photo.title}</div>
          </div>
        </Link>
        <div className='text-gray-600 dark:text-gray-200 text-xs'>
          Id: {photo.id}
        </div>
        <div
          onClick={() => removeItem.mutate(photo.id)}
          className='text-red-400 cursor-pointer ml-2'
        >
          X
        </div>
      </div>
    </li>
  );
};

export default Item;
