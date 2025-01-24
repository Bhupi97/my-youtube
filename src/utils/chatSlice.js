import { createSlice } from "@reduxjs/toolkit";


const chatSlice = createSlice({
    name: "chat",
    initialState: {
        chats: []
    },
    reducers:{
        addChats: (state, action) => {
            state.chats.splice(10, 1); // It will delete the extra message and maintain the length provided
            state.chats.unshift(action.payload);
        },
    },
});

export const { addChats } = chatSlice.actions;
export default chatSlice.reducer;
