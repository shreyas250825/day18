import React, { useMemo } from 'react';
import { useUsers } from '../hooks/useUsers';

function UsersList() {
  const { data: users, isLoading, error } = useUsers();

  const total = useMemo(() => {
    console.log('Computing user count...');
    return users?.length || 0;
  }, [users]);

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h3>Total Users: {total}</h3>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
