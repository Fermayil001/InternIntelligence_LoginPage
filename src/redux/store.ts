import { configureStore } from "@reduxjs/toolkit";
import auth from './slices/auth'


const store = configureStore({
    reducer: {
        auth,
    },
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch