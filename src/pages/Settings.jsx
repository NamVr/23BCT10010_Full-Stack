import React, { memo, useCallback, useMemo, useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

const Settings = () => {
	const [emailAlerts, setEmailAlerts] = useState(true);
	const [smsAlerts, setSmsAlerts] = useState(false);

	const toggleEmail = useCallback(() => {
		setEmailAlerts((prev) => !prev);
	}, []);

	const toggleSms = useCallback(() => {
		setSmsAlerts((prev) => !prev);
	}, []);

	const summary = useMemo(() => {
		if (!emailAlerts && !smsAlerts) {
			return "You will not receive EcoTrack alerts.";
		}
		if (emailAlerts && smsAlerts) {
			return "You will receive alerts by email and SMS.";
		}
		if (emailAlerts) {
			return "You will receive alerts by email only.";
		}
		return "You will receive alerts by SMS only.";
	}, [emailAlerts, smsAlerts]);

	const handleReset = useCallback(() => {
		setEmailAlerts(true);
		setSmsAlerts(false);
	}, []);

	return (
		<Paper
			elevation={1}
			sx={{
				p: { xs: 2, sm: 3 },
				width: "100%",
			}}
		>
			<Typography variant="h5" component="h3" gutterBottom>
				Settings
			</Typography>
			<Typography variant="body2" color="text.secondary" gutterBottom>
				Configure simple notification preferences for your EcoTrack
				account.
			</Typography>

			<Box
				mt={2}
				display="flex"
				flexDirection={{ xs: "column", sm: "row" }}
				gap={{ xs: 1, sm: 2 }}
			>
				<FormControlLabel
					control={
						<Switch checked={emailAlerts} onChange={toggleEmail} />
					}
					label="Email alerts"
				/>
				<FormControlLabel
					control={
						<Switch checked={smsAlerts} onChange={toggleSms} />
					}
					label="SMS alerts"
				/>
			</Box>

			<Divider sx={{ my: 2 }} />

			<Typography variant="body2" gutterBottom>
				{summary}
			</Typography>

			<Button variant="outlined" size="small" onClick={handleReset}>
				Reset to default
			</Button>
		</Paper>
	);
};

export default memo(Settings);
