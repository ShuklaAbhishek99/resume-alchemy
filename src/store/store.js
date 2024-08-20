import profileSlice from "@/features/profileSlice";
import resumeListSlice from "@/features/resumeListSlice";
import resumeSlice from "@/features/resumeSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        profile: profileSlice,
        resume: resumeSlice,
        resumeList: resumeListSlice,
    },
});
