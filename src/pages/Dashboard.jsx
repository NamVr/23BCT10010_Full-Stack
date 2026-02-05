import logs from "../data/logs";

const Dashboard = () => {
	const total = logs.reduce((acc, i) => acc + i.carbon, 0);

	return (
		<div>
			<p> Total {total} </p>

			<ul>
				{logs.map((log) => (
					<li key={log.id}>
						{log.activity}: {log.carbon}kg
					</li>
				))}
			</ul>
		</div>
	);
};

export default Dashboard;
