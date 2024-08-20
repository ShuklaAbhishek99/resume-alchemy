import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const resumeListSlice = createSlice({
    name: "resumeList",
    initialState,
    reducers: {
        addResumeList: (state, action) => {
            return action.payload;
        },
        removeResumeList: (state, action) => {
            return initialState;
        },
    },
});

export const { addResumeList, removeResumeList } = resumeListSlice.actions;

export default resumeListSlice.reducer;
