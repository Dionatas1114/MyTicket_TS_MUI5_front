import { useState, useEffect } from 'react';

import { api } from 'services/api';
import ConvertByTimeZone from 'utils/functions/ConvertByTimeZone';
import formatPhoneNumber from 'utils/functions/ConvertPhoneNumber';
import toastError from 'utils/toastError';

// interface Params {
//   searchParam?: string;
//   pageNumber?: string;
// }

export default function useContacts() {
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setLoading(true);
    const delayDebounceFn = setTimeout(() => {
      const fetchTickets = async () => {
        try {
          const { data } = await api.get('/contacts');
          const contacts = data?.contacts?.map((contact: Contact) => {
            return {
              ...contact,
              number: formatPhoneNumber(contact.number),
              createdAt: ConvertByTimeZone(contact.createdAt),
              updatedAt: ConvertByTimeZone(contact.updatedAt),
            };
          });

          setContacts(contacts);
          setHasMore(data.hasMore);
          setLoading(false);
        } catch (err) {
          setLoading(false);
          toastError(err);
        }
      };
      fetchTickets();
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, []);

  return { contacts, loading, hasMore };
}
