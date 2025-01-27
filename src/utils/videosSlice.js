import { createSlice } from "@reduxjs/toolkit";


const videosSlice = createSlice({
    name: "videoSlice",
    initialState: {
        mostPopular: null,
        comments: null,
        videoCategories: null,
    },
    reducers: {
        addMostPopular: (state, action) => {
            state.mostPopular = action.payload;
        },
        addComments: (state, action) => {
            state.comments = action.payload;
        },
        addSearchResults: (state, action) => {
            state.searchQueryResults = action.payload;
        },
        addCategories: (state, action) => {
            state.videoCategories = action.payload;
        }
    },
});

export const { addMostPopular, addComments, addSearchResults, addCategories } = videosSlice.actions; 
export default videosSlice.reducer;