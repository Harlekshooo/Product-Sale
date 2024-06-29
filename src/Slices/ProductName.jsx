
import { createSlice } from "@reduxjs/toolkit";

export const productNameSlice = createSlice({
    name:'productName',
    initialState:{value:('')},
    reducers:{
        namedProduct: ( state, action) => {
            state.value = action.payload
        }
    }
})

export const { namedProduct } = productNameSlice.actions
export default productNameSlice.reducer