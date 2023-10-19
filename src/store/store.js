import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import TaskSlice from "../slices/TaskSlice";
import { combineReducers } from 'redux';

import UserSlice from "../slices/UserSlice";
// import thunk from 'redux-thunk';
const persistConfig = {
  key: 'root',
  storage,
}

const taskPersistConfig = {
  key: 'tasks',
  storage,
}


const rootReducer = combineReducers({
  tasks: persistReducer(taskPersistConfig, TaskSlice),
  user: UserSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
//   middleware: [thunk]
})

export const persistor = persistStore(store)