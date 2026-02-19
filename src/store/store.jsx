import { configureStore } from "@reduxjs/toolkit";

import logsReducer from "./logsSlice";

const store = configureStore({
	reducer: {
		logs: logsReducer,
	},
});

export default store;
