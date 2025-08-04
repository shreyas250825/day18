import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost } from '../api/postsApi'; // ✅ This should now be active

function AddPost() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createPost,
    onMutate: async (newPost) => {
      await queryClient.cancelQueries({ queryKey: ['posts'] });

      const previousPosts = queryClient.getQueryData(['posts']) || [];

      const optimisticPost = {
        id: Date.now(),
        ...newPost,
      };

      queryClient.setQueryData(['posts'], [optimisticPost, ...previousPosts]);

      return { previousPosts };
    },
    onError: (_error, _newPost, context) => {
      queryClient.setQueryData(['posts'], context.previousPosts);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const handleAdd = () => {
    mutation.mutate({ title: 'New Post', body: 'Created from local server' });
  };

  return (
    <button onClick={handleAdd} disabled={mutation.isLoading}>
      {mutation.isLoading ? 'Creating...' : 'Create Post'}
    </button>
  );
}

export default AddPost;
