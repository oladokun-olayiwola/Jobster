import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./features/job/jobSlice";
import userReducer from "./features/user/userSlice";
import allJobsReducer from "./features/alljobs/allJobsSlice";

export const store = configureStore({
reducer: {
    job: jobReducer,
    user: userReducer,
    jobs: allJobsReducer,
}
}) 