import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLogs = createAsyncThunk("logs/fetchLogs", async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return [
		{ id: 1, activity: "Car Travel", carbon: 4 },
		{ id: 2, activity: "Electricity Usage", carbon: 6 },
		{ id: 3, activity: "Cycling", carbon: 0 },
	];
});

const logsSlice = createSlice({
	name: "logs",
	initialState: {
		data: [],
		status: "idle",
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchLogs.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchLogs.fulfilled, (state, action) => {
				state.status = "success";
				state.data = action.payload;
			})
			.addCase(fetchLogs.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export default logsSlice.reducer;
