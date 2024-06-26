import { configureStore } from "@reduxjs/toolkit";
import TaskSlice from "./TaskSlice";


const Store = configureStore({
 reducer: {
 card: TaskSlice,
 },
});

export default Store;