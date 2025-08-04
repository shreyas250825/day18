import React from 'react';
import { useQuery } from '@tanstack/react-query';

async function fetchPosts() {
  const res = await fetch('http://localhost:4000/posts');
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

function PostsList() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map(post => (
        <li key={post.id}>
          <strong>{post.title}</strong> - {post.body}
        </li>
      ))}
    </ul>
  );
}

export default PostsList;
