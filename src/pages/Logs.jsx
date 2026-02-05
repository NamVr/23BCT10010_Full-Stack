import logs from "../data/logs";
const Logs = () => {
	const highImpact = logs.filter((log) => log.carbon >= 4);
	return (
		<div>
			{highImpact.map((log) => (
				<li key={log.id}>
					{log.activity} - {log.carbon}kg
				</li>
			))}
		</div>
	);
};
export default Logs;
