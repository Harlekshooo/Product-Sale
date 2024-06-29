import { createSlice } from "@reduxjs/toolkit";


export const loggedInState = createSlice({
    name:'logged',
    initialState: {value: localStorage.getItem('user') ? false : true},
    reducers: {
        loggedIn: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { loggedIn } = loggedInState.actions
export default loggedInState.reducer