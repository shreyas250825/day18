import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addUser } from '../api/usersApi'; // ✅ Make sure this points to your new file

function AddUser() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const handleAddUser = () => {
    mutation.mutate({ name: 'John Doe' });
  };

  return (
    <button onClick={handleAddUser} disabled={mutation.isLoading}>
      {mutation.isLoading ? 'Adding...' : 'Add User'}
    </button>
  );
}

export default AddUser;
