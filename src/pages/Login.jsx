import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const { login } = useAuth();
	const navigate = useNavigate();

	const handleLogin = () => {
		login();
		navigate("/");
	};

	return (
		<div>
			<h2>EcoTrack Login</h2>
			<button onClick={handleLogin}>Login</button>
		</div>
	);
};

export default Login;
