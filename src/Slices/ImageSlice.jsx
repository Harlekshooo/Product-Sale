
import { createSlice } from "@reduxjs/toolkit";

export const imageSlice = createSlice({
    name:'imageName',
    initialState:{value:('')},
    reducers:{
        namedImage: ( state, action) => {
            state.value = action.payload
        }
    }
})

export const { namedImage } = imageSlice.actions
export default imageSlice.reducer
