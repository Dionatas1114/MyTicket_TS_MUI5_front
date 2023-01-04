import { useState, useEffect, useContext } from 'react';

import { api } from 'services/api';
import { AuthContext } from 'context/Auth';
import toastError from 'utils/toastError';
import ConvertByTimeZone from 'utils/functions/ConvertByTimeZone';

interface User {
  id: number;
  name: string;
  email: string;
  profile?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const useUsers = () => {
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    const delayDebounceFn = setTimeout(() => {
      const fetchUsers = async () => {
        try {
          const { data } = await api.get('/users');
          const users = data.users.map((user: User) => {
            const { createdAt, updatedAt, ...rest } = user;

            return {
              createdAt: ConvertByTimeZone(createdAt),
              updatedAt: ConvertByTimeZone(updatedAt),
              ...rest,
            };
          });

          setUsers(users);
        } catch (err) {
          setLoading(false);
          toastError(err);
        }
      };
      fetchUsers();
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [user?.id, user?.name, user?.email, user?.customer]);

  return { users, loading, hasMore };
};

export default useUsers;
