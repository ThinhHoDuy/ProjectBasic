import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: [],
    },
    reducer: {
        add(state, action) {
            state.push(action.payload)
        }
    }
});