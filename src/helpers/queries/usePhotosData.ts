import { useQuery } from 'react-query';

import { Photo } from '../../models/Photo.interface';

export function usePhotosData() {
  const photosQuery = useQuery<Photo[], Error>(
    ['photos'],
    ({ signal }) =>
      fetch(`https://jsonplaceholder.typicode.com/photos?_page=1&_limit=5`, {
        signal,
      }).then((res) => res.json()),
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  return photosQuery;
}
