import React, { memo } from "react";
import Typography from "@mui/material/Typography";

const CounterDisplay = ({ count, goal }) => {
	console.log("CounterDisplay Rendered"); // Useful for teacher testing
	return (
		<Typography variant="h5" textAlign="center" my={2}>
			{count} / {goal} glasses completed
		</Typography>
	);
};

export default memo(CounterDisplay);
