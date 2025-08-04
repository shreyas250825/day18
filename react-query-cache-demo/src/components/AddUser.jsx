import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addUser } from '../api/userApi';

function AddUser() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] }); // invalidate after add
    }
  });

  const handleAdd = () => {
    const name = `User ${Date.now()}`;
    mutation.mutate({ name });
  };

  return (
    <button onClick={handleAdd} disabled={mutation.isLoading}>
      {mutation.isLoading ? 'Adding...' : 'Add User'}
    </button>
  );
}

export default AddUser;
