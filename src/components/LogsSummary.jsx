import React, { memo } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const LogsSummary = ({ total, onReload }) => {
	console.log("LogsSummary rendered");

	return (
		<Paper
			elevation={2}
			sx={{
				p: { xs: 2, sm: 2.5 },
				mb: 2,
				width: "100%",
			}}
		>
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				mb={1}
			>
				<Typography variant="subtitle1">Total carbon today</Typography>
				<Typography variant="h6">{total} kg CO₂</Typography>
			</Box>
			<Button variant="contained" size="small" onClick={onReload}>
				Refresh logs
			</Button>
		</Paper>
	);
};

export default memo(LogsSummary);
