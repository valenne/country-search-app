export const formatNumberToLocal = (zone: string, value: number) => {
	return new Intl.NumberFormat(zone).format(value);
};
