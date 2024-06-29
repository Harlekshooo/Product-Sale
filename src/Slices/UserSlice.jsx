import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {value: {}},
    reducers: {
        myLogin: (state, action) => {
            state.value = action.payload
        },
        myLogout: (state) => {
            state.value
        }
    }
})

export const { myLogin, myLogout } = userSlice.actions
export default userSlice.reducer