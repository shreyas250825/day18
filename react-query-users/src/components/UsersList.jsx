import React from 'react';
import { useQuery } from '@tanstack/react-query';

async function fetchUsers() {
  const response = await fetch('http://localhost:4000/users');
  if (!response.ok) throw new Error('Failed to fetch users');
  return response.json();
}

function UsersList() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UsersList;
