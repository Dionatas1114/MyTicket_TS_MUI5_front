// import { createStore, combineReducers, Store } from 'redux';
import { configureStore, combineReducers, Store } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import auth from './authReducer';
// import user from './userReducer';
import { connectionReducer } from './connectionReducer';

interface AppState {}

const reducers = combineReducers({
  // user,
  connectionReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

// const store: Store = createStore(persistedReducer);
// const persistor = persistStore(store);

// export { store, persistor };
