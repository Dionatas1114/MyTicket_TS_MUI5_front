import { useState, useEffect, useReducer, useContext } from 'react';

import { api, socket } from 'services/api';
import { AuthContext } from 'context/Auth';
import { connectionReducer } from 'store/connectionReducer';

import ConvertByTimeZone from 'utils/functions/ConvertByTimeZone';
import toastError from 'utils/toastError';

const useConnections = () => {
  const [connections, setConnections] = useState([]);
  const [whatsApps, dispatch] = useReducer(connectionReducer, []);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    const fetchSession = async () => {
      try {
        const { data } = await api.get('/whatsapp');
        const connections = data?.connections?.map((connection: Connection) => {
          return {
            ...connection,
            updatedAt: ConvertByTimeZone(connection.updatedAt),
          };
        });
        // const whatsAppData = data?.filter((allConnections: Connections) => {
        //   return user?.customer === 'master'
        //     ? allConnections
        //     : allConnections?.user?.id === user?.id ||
        //         allConnections?.user?.name === user?.name ||
        //         allConnections?.user?.email === user?.email ||
        //         allConnections?.userId.toString() === user?.customer;
        // });
        setConnections(connections);
        // dispatch({ type: 'LOAD_WHATSAPPS', payload: data });
        setLoading(false);
      } catch (err) {
        setLoading(false);
        toastError(err);
      }
    };
    fetchSession();
  }, [user?.customer, user?.email, user?.id, user?.name]);

  useEffect(() => {
    socket.on('whatsapp', (data) => {
      if (data.action === 'update') {
        dispatch({ type: 'UPDATE_WHATSAPPS', payload: data.whatsapp });
      }
    });

    socket.on('whatsapp', (data) => {
      if (data.action === 'delete') {
        dispatch({ type: 'DELETE_WHATSAPPS', payload: data.whatsappId });
      }
    });

    socket.on('whatsappSession', (data) => {
      if (data.action === 'update') {
        dispatch({ type: 'UPDATE_SESSION', payload: data.session });
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return { connections, loading };
};

export default useConnections;
