import { FC } from 'react';

import { WithChildren } from '../helpers/types/WithChildren';
import { Photo } from '../models/Photo.interface';

type CardProps = WithChildren<{
  photo: Photo;
}>;

const Card: FC<CardProps> = ({ photo }: CardProps) => {
  return (
    <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
      <img className='rounded-t-lg' src={photo.url} alt='' />

      <div className='p-5'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {photo.title}
        </h5>

        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore cum
          omnis tempora ratione nam consectetur dolorem rem. Repudiandae, dolor
          laboriosam.
        </p>
        <div className='flex justify-between'>
          <button className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700'>
            Remove from cart -
          </button>
          <button className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700'>
            Add to Cart +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
