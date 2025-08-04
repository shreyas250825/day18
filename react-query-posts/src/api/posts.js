import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

export const createPost = async (newPost) => {
  const { data } = await axios.post(API_URL, newPost);
  return data;
};
