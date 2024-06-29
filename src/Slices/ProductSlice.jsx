import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: {value:[]},
    reducers: {
        productData: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { productData } = productSlice.actions
export default productSlice.reducer