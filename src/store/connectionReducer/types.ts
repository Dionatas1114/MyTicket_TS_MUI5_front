/**
 * Action Types
 */
export enum ConnectionTypes {
  LOAD_CONNECTION = '@Connection/LOAD_CONNECTION',
  UPDATE_CONNECTION = '@Connection/UPDATE_CONNECTION',
  UPDATE_SESSION = '@Connection/UPDATE_SESSION',
  DELETE_CONNECTION = '@Connection/DELETE_CONNECTION',
}

/**
 * Action Types
 */
export interface ConnectionState {
  readonly data: ConnectionTypes[];
  // readonly loading: boolean;
  // readonly error: boolean;
}
