import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of your state
interface AuthState {
    isLoggedIn: boolean;
    user: object | null;
}

const initialState: AuthState = {
    isLoggedIn: false,
    user: null,
};

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<object>) {
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logout(state) {
            localStorage.removeItem('user');
            state.isLoggedIn = false;
            state.user = null;
        }
    }
})

export const { login, logout } = auth.actions;

export default auth.reducer;
