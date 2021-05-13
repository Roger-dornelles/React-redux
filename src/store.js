
import { createStore } from 'redux';
import { persistStore,persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Reducers from './reducers/index';

const persistConfig = {
    key:'root',
    storage
};

const pReducers = persistReducer(persistConfig,Reducers);

const store = createStore(pReducers);
const persistor = persistStore(store);

export { store,persistor };