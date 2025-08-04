import React from 'react';

import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from './api/posts';
import PostForm from './components/PostForm';

function App() {
  const { data: posts, isLoading, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>React Query Posts</h1>
      <PostForm />
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong> - {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
