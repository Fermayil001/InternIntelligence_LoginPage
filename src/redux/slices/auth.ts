import { createSlice } from "@reduxjs/toolkit";


const userFromLocalStorage = localStorage.getItem('user');
const initialState = {
    isLoggedIn: userFromLocalStorage ? true : false,
    user: userFromLocalStorage ? JSON.parse(userFromLocalStorage) : false,
};

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logout(state) {
            localStorage.removeItem('user');
            state.isLoggedIn = false;
            state.user = false;
        }
    }
})

export const { login, logout } = auth.actions;

export default auth.reducer;
