import { createSlice } from "@reduxjs/toolkit";


const videosSlice = createSlice({
    name: "videoSlice",
    initialState: {
        mostPopular: null,
        comments: null,
    },
    reducers: {
        addMostPopular: (state, action) => {
            state.mostPopular = action.payload;
        },
        addComments: (state, action) => {
            state.comments = action.payload;
        },
    },
});

export const { addMostPopular, addComments } = videosSlice.actions; 
export default videosSlice.reducer;