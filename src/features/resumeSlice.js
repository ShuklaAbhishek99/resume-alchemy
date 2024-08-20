import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const resumeSlice = createSlice({
    name: "resume",
    initialState,
    reducers: {
        addResume: (state, action) => {
            return action.payload;
        },
        removeResume: (state, action) => {
            return initialState;
        },
    },
});

export const { addResume, removeResume } = resumeSlice.actions;

export default resumeSlice.reducer;
