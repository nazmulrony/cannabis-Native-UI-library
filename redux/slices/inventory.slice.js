import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inventoryProduct: [],
};

const inventorySlice = createSlice({
    name: "inventory",
    initialState,
    reducers: {
        setInventoryProduct: (state, { payload }) => {
            state.inventoryProduct = payload;
        },
        resetInventory: (state) => {
            state.inventoryProduct = [];
        },
    },
});

export default inventorySlice.reducer;
export const inventorySelector = (state) => state.inventory;
export const { setInventoryProduct, resetInventory } = inventorySlice.actions;
