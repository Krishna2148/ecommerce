import { combineReducers, createStore } from "redux";
import itemReducer from "./itemReducer";
import cartReducer from "./cartReducer";
// import { persistReducer } from "redux-persist";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 



const rootReducer = combineReducers({
  itemStore : itemReducer,
  cartStore: cartReducer
})
 
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const myStore = createStore(persistedReducer)
export const myPersistor = persistStore(myStore)