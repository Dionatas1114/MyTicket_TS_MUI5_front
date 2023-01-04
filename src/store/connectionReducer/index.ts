import { Reducer } from 'redux';
import { ConnectionState, ConnectionTypes } from './types';

const INITIAL_STATE: ConnectionState = [];

export const connectionReducer: Reducer<ConnectionState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ConnectionTypes.LOAD_CONNECTION:
      const connections = action.payload;
      return [...connections];

    case ConnectionTypes.UPDATE_CONNECTION:
      const whatsApp = action.payload;
      // const whatsAppIndex = state.findIndex(s => s.id === whatsApp.id);

      // if (whatsAppIndex !== -1) {
      //   state[whatsAppIndex] = whatsApp;
      //   return [...state];
      // } else {
      //   return [whatsApp, ...state];
      // }
      // const connections = action.payload.data;
      return { ...state, data: connections };

    case ConnectionTypes.RESET_CONNECTION:
      return [];

    default:
      return state;
  }
};

const reducer = (state: any, action: any) => {
  if (action.type === 'LOAD_WHATSAPPS') {
    const whatsApps = action.payload;
    return [...whatsApps];
  }

  if (action.type === 'UPDATE_WHATSAPPS') {
    const whatsApp = action.payload;
    const whatsAppIndex = state.findIndex((s: any) => s.id === whatsApp.id);

    if (whatsAppIndex !== -1) {
      state[whatsAppIndex] = whatsApp;
      return [...state];
    } else {
      return [whatsApp, ...state];
    }
  }

  if (action.type === 'UPDATE_SESSION') {
    const whatsApp = action.payload;
    const whatsAppIndex = state.findIndex((s: any) => s.id === whatsApp.id);

    if (whatsAppIndex !== -1) {
      state[whatsAppIndex].status = whatsApp.status;
      state[whatsAppIndex].updatedAt = whatsApp.updatedAt;
      state[whatsAppIndex].qrcode = whatsApp.qrcode;
      state[whatsAppIndex].retries = whatsApp.retries;
      return [...state];
    } else {
      return [...state];
    }
  }

  if (action.type === 'DELETE_WHATSAPPS') {
    const whatsAppId = action.payload;

    const whatsAppIndex = state.findIndex((s: any) => s.id === whatsAppId);
    if (whatsAppIndex !== -1) {
      state.splice(whatsAppIndex, 1);
    }
    return [...state];
  }

  if (action.type === 'RESET') {
    return [];
  }
};
