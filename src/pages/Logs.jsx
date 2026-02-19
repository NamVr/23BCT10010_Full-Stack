import { useDispatch, useSelector } from "react-redux";
import { fetchLogs } from "../store/logsSlice";
import { useEffect } from "react";

const Logs = () => {
	// NEW: Dispatch & Selector
	const dispatch = useDispatch();
	const { data, status, error } = useSelector((state) => state.logs);

	useEffect(() => {
		if (status == "idle") {
			dispatch(fetchLogs());
		}
	}, [status, dispatch]);

	const handleReload = () => {
		dispatch(fetchLogs());
	};

	if (status === "loading") {
		return <p>Loading logs...</p>;
	}

	if (status == "failed") {
		return <p>Error: {error}</p>;
	}

	// Return the Logs Page.
	return (
		<div style={{ padding: "1rem" }}>
			<h3>Daily Logs</h3>
			<button onClick={handleReload}>Fetch</button>

			<ul>
				{data.map((log) => (
					<li key={log.id}>
						{log.activity} - {log.carbon} kg CO<sub>2</sub>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Logs;
