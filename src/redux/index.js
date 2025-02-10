import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/create.slice";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
