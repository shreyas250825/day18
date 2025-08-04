import React from 'react';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  return (
    <div>
      <h1>React Query: SWR + Caching</h1>
      <AddUser />
      <UsersList />
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
