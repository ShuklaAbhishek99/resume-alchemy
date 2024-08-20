import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        addProfile: (state, action) => {
            return action.payload;
        },
        removeProfile: (state, action) => {
            return initialState;
        },
    },
});

export const { addProfile, removeProfile } = profileSlice.actions;

export default profileSlice.reducer;
