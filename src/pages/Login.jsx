import React, { memo, useCallback } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Login = () => {
	const { login } = useAuth();
	const navigate = useNavigate();

	const handleLogin = useCallback(() => {
		login();
		navigate("/dashboard");
	}, [login, navigate]);

	return (
		<Container maxWidth={false} sx={{ px: { xs: 2, sm: 3 } }}>
			<Box
				display="flex"
				alignItems="center"
				justifyContent="center"
				minHeight="100vh"
				sx={{ py: { xs: 4, sm: 0 }, width: "100%" }}
			>
				<Paper
					elevation={3}
					sx={{
						p: { xs: 3, sm: 4 },
						width: "100%",
						maxWidth: 420,
						mx: "auto",
					}}
				>
					<Typography variant="h4" component="h2" gutterBottom>
						EcoTrack Login
					</Typography>
					<Typography
						variant="body1"
						color="text.secondary"
						gutterBottom
					>
						Sign in to access your environmental impact dashboard.
					</Typography>
					<Button
						fullWidth
						variant="contained"
						color="primary"
						onClick={handleLogin}
						sx={{ mt: 3 }}
					>
						Login
					</Button>
				</Paper>
			</Box>
		</Container>
	);
};

export default memo(Login);
