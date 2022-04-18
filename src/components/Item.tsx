import { FC } from 'react';

import { Link } from 'react-router-dom';

import { WithChildren } from '../helpers/types/WithChildren';
import { Photo } from '../models/Photo.interface';

type ItemProps = WithChildren<{
  photo: Photo;
}>;

const Item: FC<ItemProps> = ({ photo }: ItemProps) => {
  return (
    <Link to={`/${photo.id}`}>
      <li className='flex flex-row'>
        <div className='select-none cursor-pointer flex flex-1 items-center p-4'>
          <div className='flex flex-col w-10 h-10 justify-center items-center mr-4'>
            <img
              alt='profile'
              src={photo.thumbnailUrl}
              className='mx-auto object-cover rounded-full h-10 w-10 '
            />
          </div>
          <div className='flex-1 pl-1 mr-16'>
            <div className='font-medium dark:text-white'>{photo.title}</div>
          </div>
          <div className='text-gray-600 dark:text-gray-200 text-xs'>
            Id: {photo.id}
          </div>
        </div>
      </li>
    </Link>
  );
};

export default Item;
