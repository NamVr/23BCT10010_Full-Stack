import React, { memo, useMemo } from "react";
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Overview = () => {
	const { data } = useSelector((state) => state.logs);

	const stats = useMemo(() => {
		if (!data || data.length === 0) {
			return {
				count: 0,
				average: 0,
				max: 0,
			};
		}

		const count = data.length;
		const total = data.reduce((sum, log) => sum + log.carbon, 0);
		const average = total / count;
		const max = Math.max(...data.map((log) => log.carbon));

		return { count, average: Number(average.toFixed(1)), max };
	}, [data]);

	return (
		<Paper
			elevation={1}
			sx={{
				p: { xs: 2, sm: 3 },
				width: "100%",
			}}
		>
			<Typography variant="h5" component="h3" gutterBottom>
				Overview
			</Typography>
			<Typography variant="body2" color="text.secondary" gutterBottom>
				Quick snapshot of your recent EcoTrack activity. Switch to the
				Logs section for full details.
			</Typography>

			<Box
				display="flex"
				flexDirection={{ xs: "column", sm: "row" }}
				gap={{ xs: 2, sm: 4 }}
				mt={2}
			>
				<Box>
					<Typography variant="subtitle2" color="text.secondary">
						Number of logs
					</Typography>
					<Typography variant="h6">{stats.count}</Typography>
				</Box>
				<Box>
					<Typography variant="subtitle2" color="text.secondary">
						Average carbon (kg CO₂)
					</Typography>
					<Typography variant="h6">{stats.average}</Typography>
				</Box>
				<Box>
					<Typography variant="subtitle2" color="text.secondary">
						Highest single entry (kg CO₂)
					</Typography>
					<Typography variant="h6">{stats.max}</Typography>
				</Box>
			</Box>
		</Paper>
	);
};

export default memo(Overview);
