import { useState, useEffect, useContext } from 'react';

import { api } from 'services/api';
import { AuthContext } from 'context/Auth';
import toastError from 'utils/toastError';

// interface Params {
//   searchParam?: string;
//   pageNumber?: string;
//   status?: string;
//   date?: string;
//   showAll?: string;
//   queueIds: number[];
//   withUnreadMessages?: string;
// }

const useTickets = () =>
  //   {
  //   searchParam,
  //   pageNumber,
  //   status,
  //   date,
  //   showAll,
  //   queueIds,
  //   withUnreadMessages,
  // }: Params
  {
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(false);
    const [tickets, setTickets] = useState<Ticket[] | []>([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
      setLoading(true);
      const delayDebounceFn = setTimeout(() => {
        const fetchTickets = async () => {
          try {
            const { data } = await api.get('/tickets');
            // {
            //   params: {
            //     searchParam,
            //     pageNumber,
            //     status,
            //     date,
            //     showAll,
            //     queueIds,
            //     withUnreadMessages,
            //   },
            // }
            const tickets = data?.tickets;
            // filter((allTickets: Tickets) => {
            //   const userTicket = allTickets?.whatsapp?.user;
            //   return user?.customer === 'master'
            //     ? allTickets
            //     : userTicket?.id === user?.id ||
            //         userTicket?.name === user?.name ||
            //         userTicket?.email === user?.email ||
            //         userTicket?.id.toString() === user?.customer;
            // });
            setTickets(tickets);
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
    }, [user?.id, user?.name, user?.email, user?.customer]);

    return { tickets, loading, hasMore };
  };

export default useTickets;
