// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'
import fileFolderReducer from "./fileFolderSlice"


export const store = configureStore({
  reducer: {
    auth: authReducer,
    fileFolder: fileFolderReducer
 },
});
