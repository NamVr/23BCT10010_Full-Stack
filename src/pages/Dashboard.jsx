import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
	const { logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate("/login");
	};

	return (
		<div>
			<h2>EcoTrack Dashboard</h2>

			<nav>
				<Link to="">Overview</Link> | <Link to="reports">Logs</Link> |{" "}
				<Link to="settings">Settings</Link>
			</nav>

			<button onClick={handleLogout}>Logout</button>

			<hr />
			<Outlet />
		</div>
	);
};

export default Dashboard;
