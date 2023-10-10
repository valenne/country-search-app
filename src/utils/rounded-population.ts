/* ***** ROUNDED FOLLOWERS ***** */

export function roundedFollowers(population: number) {
	if (population <= 0) {
		return '0';
	}

	if (population >= 1_000) {
		if (population >= 1_000_000) {
			return `${Math.round(population / 1_000_000)}M`;
		}
		return `${Math.round(population / 1_000)}K`;
	}
}
