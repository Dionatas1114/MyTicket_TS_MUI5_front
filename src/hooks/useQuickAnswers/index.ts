import { useState, useEffect } from 'react';

import { api } from 'services/api';
import toastError from 'utils/toastError';
import ConvertByTimeZone from 'utils/functions/ConvertByTimeZone';

const useQuickAnswers = () => {
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [quickAnswers, setQuickAnswers] = useState<QuickAnswer[]>([]);

  useEffect(() => {
    setLoading(true);
    const delayDebounceFn = setTimeout(() => {
      const fetchQuickAnswers = async () => {
        try {
          const { data } = await api.get('/quickAnswers');
          const quickAnswers = data?.quickAnswers?.map((quickAnswer: QuickAnswer) => {
            return {
              ...quickAnswer,
              createdAt: ConvertByTimeZone(quickAnswer.createdAt),
              updatedAt: ConvertByTimeZone(quickAnswer.updatedAt),
            };
          });

          setQuickAnswers(quickAnswers);
        } catch (err) {
          setLoading(false);
          toastError(err);
        }
      };
      fetchQuickAnswers();
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, []);

  return { quickAnswers, loading, hasMore };
};

export default useQuickAnswers;
