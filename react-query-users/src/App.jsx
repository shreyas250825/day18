import React from 'react';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AddPost from './components/AddPost';
import PostsList from './components/PostsList';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React Query Users</h1>
      <AddUser />
      <UsersList />
      <ReactQueryDevtools initialIsOpen={false} />
       <h2>Posts</h2>
       <AddPost />
       <PostsList />
    </div>
   
  );
}


export default App;
