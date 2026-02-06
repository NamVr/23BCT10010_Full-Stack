import logs from "../data/logs";

const Logs = () => {
	const highImpact = logs.filter((log) => log.carbon >= 4);

	return (
		<div>
			<h2>Daily Logs</h2>
			<ul>
				{highImpact.map((k) => (
					<li key={k.id}>
						{k.activity}: {k.carbon}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Logs;
