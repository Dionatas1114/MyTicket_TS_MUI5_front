import { useState, useEffect, useContext } from 'react';

import { api } from 'services/api';
import { AuthContext } from 'context/Auth';
import toastError from 'utils/toastError';
import ConvertByTimeZone from 'utils/functions/ConvertByTimeZone';

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
          const users = data?.users?.map((user: User) => {
            return {
              ...user,
              createdAt: ConvertByTimeZone(user.createdAt),
              updatedAt: ConvertByTimeZone(user.updatedAt),
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
