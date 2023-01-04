/**
 * Action Types
 */
export enum ConnectionTypes {
  LOAD_CONNECTION = 'LOAD_CONNECTION',
  UPDATE_CONNECTION = 'UPDATE_CONNECTION',
  UPDATE_SESSION = 'UPDATE_SESSION',
  DELETE_CONNECTION = 'DELETE_CONNECTION',
  RESET_CONNECTION = 'RESET',
}

/**
 * Action Types
 */
export interface ConnectionState {
  // readonly id: number;
  // readonly data: ConnectionTypes[];
  // readonly loading: boolean;
  // readonly error: boolean;
}
