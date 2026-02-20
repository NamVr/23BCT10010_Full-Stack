import React, { memo } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
	return (
		<AppBar position="static" color="primary" enableColorOnDark>
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					EcoTrack
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default memo(Header);
