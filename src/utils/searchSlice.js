import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {

    },
    reducers: {
        CacheResults: (state, action) => {
            state = { ...action.payload, ...state};
        },

    },
});

export const { CacheResults } = searchSlice.actions;
export default searchSlice.reducer;


// Structuring Cache
// Eg.
// If structured in array keyword: Superman will be stored like:
//  [S, Su, Superm,....] : Time complexity O(n)
// Whereas in Object it will be stored like:
//  {
        // S:
        // Su:
        // Superm:
// } : Time complexity O(1) Really efficient
// 
// new Map(); Even more optimized