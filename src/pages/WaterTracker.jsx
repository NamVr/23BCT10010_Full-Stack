import React, { useState, useEffect, useCallback } from "react";
import {
	Box,
	Card,
	CardContent,
	Button,
	Typography,
	Alert,
	CircularProgress,
} from "@mui/material";
import CounterDisplay from "../components/CounterDisplay";

const WaterTracker = () => {
	// State variables with default values
	const [count, setCount] = useState(() => {
		const saved = localStorage.getItem("waterCount");
		return saved ? parseInt(saved) : 0;
	});
	const [goal, setGoal] = useState(8);
	const [tip, setTip] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// Persist count to localStorage
	useEffect(() => {
		localStorage.setItem("waterCount", count);
	}, [count]);

	// Fetch health tip API
	const fetchTip = async () => {
		setLoading(true);
		setError(null);
		try {
			const response = await fetch("https://api.adviceslip.com/advice");
			if (!response.ok) throw new Error("Failed to fetch tip");
			const data = await response.json();
			setTip(data.slip.advice);
		} catch (err) {
			setError("Could not load health tip.");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchTip();
	}, []);

	// UseCallback to prevent unnecessary re-renders of child components
	const increment = useCallback(() => setCount((prev) => prev + 1), []);
	const decrement = useCallback(
		() => setCount((prev) => (prev > 0 ? prev - 1 : 0)),
		[],
	);
	const reset = useCallback(() => setCount(0), []);

	return (
		<Box display="flex" flexDirection="column" alignItems="center" gap={3}>
			<Card sx={{ minWidth: 300, p: 2 }}>
				<CardContent>
					<Typography variant="h6" gutterBottom>
						Daily Water Tracker
					</Typography>

					{/* Specialized Component  */}
					<CounterDisplay count={count} goal={goal} />

					<Box display="flex" justifyContent="center" gap={1} mb={2}>
						<Button variant="contained" onClick={increment}>
							+
						</Button>
						<Button
							variant="contained"
							color="secondary"
							onClick={decrement}
						>
							-
						</Button>
						<Button variant="outlined" onClick={reset}>
							Reset
						</Button>
					</Box>

					{count >= goal && (
						<Alert severity="success">Goal Reached!</Alert>
					)}
				</CardContent>
			</Card>

			<Card sx={{ maxWidth: 400 }}>
				<CardContent>
					<Typography variant="subtitle1" fontWeight="bold">
						Today's Health Tip:
					</Typography>
					{loading ? (
						<CircularProgress size={20} />
					) : (
						<Typography>{tip}</Typography>
					)}
					{error && <Typography color="error">{error}</Typography>}
				</CardContent>
			</Card>
		</Box>
	);
};

export default WaterTracker;
