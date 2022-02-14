import { ConnectionTypes } from './types';

export function loadConnecion() {
  return {
    type: ConnectionTypes.LOAD_CONNECTION,
  };
}

export function updateConnecion(data: any) {
  return {
    type: ConnectionTypes.UPDATE_CONNECTION,
    data,
  };
}

export function deleteConnecion(data: any) {
  return {
    type: ConnectionTypes.DELETE_CONNECTION,
    data,
  };
}

// export function logout(data) {
//   return {
//     type: '@user/LOGOUT',
//     data
//   };
// }
