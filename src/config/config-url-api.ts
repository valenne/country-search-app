export const API_URL = {
	allCountries: (): string => `${process.env.COUNTRIES_ALL}`,
	countriesByRegion: (region: string) => `${process.env.COUNTRIES_BY_REGION}/${region}`,
	countriesByName: (name: string) => `${process.env.COUNTRIES_BY_NAME}/${name}`
};
