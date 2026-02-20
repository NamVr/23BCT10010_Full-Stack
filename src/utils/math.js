export const calculateTotalEmissions = (logs) => {
	if (!logs || logs.length == 0) return 0;

	return logs.reduce((sum, log) => sum + (log.emissions || 0), 0);
};
