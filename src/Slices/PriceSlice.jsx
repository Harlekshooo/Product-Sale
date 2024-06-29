
import { createSlice } from "@reduxjs/toolkit";

export const priceSlice = createSlice({
    name:'price',
    initialState:{value:0},
    reducers:{
        productPrice: ( state, action) => {
            state.value = action.payload
        }
    }
})

export const { productPrice } = priceSlice.actions
export default priceSlice.reducer