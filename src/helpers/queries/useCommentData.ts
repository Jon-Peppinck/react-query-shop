import { useQuery } from 'react-query';

import { Comment } from '../../models/Comment.interface';

export function useCommentData(id: number) {
  const commentQuery = useQuery<Comment, Error>(
    ['comment', id],
    ({ signal }) =>
      fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
        signal,
      }).then((res) => res.json()),
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  return commentQuery;
}
