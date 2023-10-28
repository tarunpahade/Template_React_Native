const {configureStore}= require('@reduxjs/toolkit')
import { appSlice } from './apiSlicer'
import { accountSlice } from './authentication'
export const store =configureStore({
    
    reducer:{
    account:accountSlice.reducer,
    api:appSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appSlice.middleware),
})