import { useState, useEffect } from 'react';

import { api } from 'services/api';
import toastError from 'utils/toastError';
import ConvertByTimeZone from 'utils/functions/ConvertByTimeZone';

const useQueues = () => {
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [queues, setQueues] = useState<Queue[]>([]);

  useEffect(() => {
    setLoading(true);
    const delayDebounceFn = setTimeout(() => {
      const fetchQueues = async () => {
        try {
          const { data } = await api.get('/queues');
          const queues = data?.map((queue: Queue) => {
            return {
              ...queue,
              createdAt: ConvertByTimeZone(queue.createdAt),
              updatedAt: ConvertByTimeZone(queue.updatedAt),
            };
          });

          setQueues(queues);
        } catch (err) {
          setLoading(false);
          toastError(err);
        }
      };
      fetchQueues();
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, []);

  return { queues, loading, hasMore };
};

export default useQueues;
