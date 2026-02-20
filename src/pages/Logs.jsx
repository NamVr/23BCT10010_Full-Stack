import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogs } from "../store/logsSlice";
import LogsSummary from "../components/LogsSummary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

const calculateTotalCarbon = (logs) => {
	console.log("Expensive total calculation running...");
	let result = 0;

	for (let i = 0; i < 5000000; i += 1) {
		result = i;
	}
	return logs.reduce((sum, log) => sum + log.carbon, 0);
};

const Logs = () => {
	const dispatch = useDispatch();
	const { data, status, error } = useSelector((state) => state.logs);
	const [dark, setDark] = useState(false);

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchLogs());
		}
	}, [status, dispatch]);

	const handleReload = useCallback(() => {
		dispatch(fetchLogs());
	}, [dispatch]);

	const toggleTheme = useCallback(() => {
		setDark((prev) => !prev);
	}, []);

	const totalCarbon = useMemo(() => calculateTotalCarbon(data), [data]);

	if (status === "loading") {
		return (
			<Box display="flex" justifyContent="center" mt={4}>
				<CircularProgress />
			</Box>
		);
	}

	if (status === "failed") {
		return (
			<Alert severity="error" sx={{ mt: 2 }}>
				Error: {error}
			</Alert>
		);
	}

	return (
		<Box mt={{ xs: 1.5, sm: 2 }}>
			<LogsSummary total={totalCarbon} onReload={handleReload} />

			<Paper
				elevation={2}
				sx={{
					p: { xs: 2, sm: 2.5 },
					mb: 2,
					width: "100%",
					backgroundColor: dark ? "grey.900" : "background.paper",
					color: dark ? "grey.100" : "text.primary",
				}}
			>
				<Box
					display="flex"
					flexDirection={{ xs: "column", sm: "row" }}
					justifyContent="space-between"
					alignItems={{ xs: "flex-start", sm: "center" }}
					gap={1.5}
					mb={2}
				>
					<Typography variant="h6">Daily Logs</Typography>
					<Button
						variant="outlined"
						size="small"
						onClick={toggleTheme}
						sx={{ alignSelf: { xs: "stretch", sm: "center" } }}
					>
						Toggle Theme
					</Button>
				</Box>

				<Typography variant="body2" color="inherit" mb={2}>
					Theme: {dark ? "Dark" : "Light"}
				</Typography>

				<List dense>
					{data.map((log) => (
						<ListItem key={log.id} divider>
							<ListItemText
								primary={log.activity}
								secondary={`${log.carbon} kg CO₂`}
							/>
						</ListItem>
					))}
				</List>
			</Paper>
		</Box>
	);
};

export default memo(Logs);
