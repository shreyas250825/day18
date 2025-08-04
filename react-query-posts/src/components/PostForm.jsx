import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost } from '../api/posts';

function PostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createPost,

    onMutate: async (newPost) => {
      await queryClient.cancelQueries({ queryKey: ['posts'] });

      const previousPosts = queryClient.getQueryData(['posts']);

      const optimisticPost = {
        id: Date.now(),
        ...newPost,
      };

      queryClient.setQueryData(['posts'], old => [optimisticPost, ...old]);

      return { previousPosts };
    },

    onError: (_err, _newPost, context) => {
      queryClient.setQueryData(['posts'], context.previousPosts);
      alert('Error creating post!');
    },

    onSettled: () => {
       console.log('Post created (optimistic update applied)'); // This avoids re-fetching fake data from the placeholder API
                                                                // which would overwrite our optimistic post

    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ title, body });
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h2>Create a New Post</h2>

      <input
        type="text"
        placeholder="Enter the title of your post"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <br />

      <textarea
        placeholder="Write the content of your post here..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
        rows={4}
      />

      <br />

      <button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? 'Posting...' : 'Add Post'}
      </button>

      {mutation.isSuccess && <p style={{ color: 'green' }}>Post successfully added!</p>}
    </form>
  );
}

export default PostForm;
