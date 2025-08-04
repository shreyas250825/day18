// src/api/postApi.js

const BASE_URL = 'http://localhost:4000';

export async function fetchPosts() {
  const response = await fetch(`${BASE_URL}/posts`);
  if (!response.ok) throw new Error('Failed to fetch posts');
  return response.json();
}

export async function createPost(newPost) {
  const response = await fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPost),
  });

  if (!response.ok) throw new Error('Failed to create post');
  return response.json();
}
