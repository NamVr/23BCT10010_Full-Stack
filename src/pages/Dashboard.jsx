import React, { memo, useCallback } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Header from "../components/Header";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const Dashboard = () => {
	const { logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = useCallback(() => {
		logout();
		navigate("/login");
	}, [logout, navigate]);

	return (
		<>
			<Header />
			<Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
				<Box mt={{ xs: 2, sm: 4 }}>
					<Box
						display="flex"
						flexDirection={{ xs: "column", sm: "row" }}
						justifyContent="space-between"
						alignItems={{ xs: "flex-start", sm: "center" }}
						gap={2}
						mb={3}
					>
						<Typography variant="h4" component="h2">
							EcoTrack Dashboard
						</Typography>
						<Button
							variant="outlined"
							color="inherit"
							size="small"
							onClick={handleLogout}
							sx={{ alignSelf: { xs: "stretch", sm: "center" } }}
						>
							Logout
						</Button>
					</Box>

					<Stack
						direction={{ xs: "column", sm: "row" }}
						spacing={1.5}
						component="nav"
						mb={2}
						sx={{ "& a": { textDecoration: "none" } }}
					>
						<Button component={Link} to="" variant="text" fullWidth>
							Overview
						</Button>
						<Button
							component={Link}
							to="water"
							variant="text"
							fullWidth
						>
							Water Tracker
						</Button>
						<Button
							component={Link}
							to="reports"
							variant="text"
							fullWidth
						>
							Logs
						</Button>
						<Button
							component={Link}
							to="settings"
							variant="text"
							fullWidth
						>
							Settings
						</Button>
					</Stack>

					<Divider sx={{ mb: 3 }} />

					<Outlet />
				</Box>
			</Container>
		</>
	);
};

export default memo(Dashboard);
