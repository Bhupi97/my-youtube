import { createSlice } from "@reduxjs/toolkit";


const videosSlice = createSlice({
    name: "videoSlice",
    initialState: {
        mostPopular: null,
    },
    reducers: {
        addMostPopular: (state, action) => {
            state.mostPopular = action.payload;
        },
    },
});

export const { addMostPopular } = videosSlice.actions; 
export default videosSlice.reducer;