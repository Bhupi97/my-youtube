import { createSlice } from "@reduxjs/toolkit";


const videosSlice = createSlice({
    name: "videoSlice",
    initialState: {
        mostPopular: null,
        currentlyPlayed: null,
    },
    reducers: {
        addMostPopular: (state, action) => {
            state.mostPopular = action.payload;
        },
        addCurrentlyPlayed: (state, action) => {
            state.currentlyPlayed = action.payload;
        },
    },
});

export const { addMostPopular, addCurrentlyPlayed } = videosSlice.actions; 
export default videosSlice.reducer;