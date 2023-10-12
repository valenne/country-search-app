import { API_URL } from '../config/config-url-api';
import { CountriesProps } from '../types/countries-types';

export const useFetchCountries = async () => {
	console.log('charmander');

	try {
		const response = await fetch(API_URL.allCountries(), {
			method: 'GET',
			headers: {
				'Content-type': 'application/json'
			}
		});

		if (!response.ok || response.status === 404) return;

		const data = await response.json();

		const customDataReturn: CountriesProps & {
			id: string;
		} = data.map((country: CountriesProps) => {
			return {
				id: crypto.randomUUID(),
				name: {
					common: country.name.common
				},
				population: country.population,
				capital: country.capital ?? 'n/a',
				flags: {
					png: country.flags.png,
					altImg: country.flags.alt ?? `${country.name.common} flag`
				},
				region: country.region
			};
		});

		return customDataReturn;
	} catch (e) {
		throw new Error('api not response');
	}
};

// export const useFetchCountries = async () => {
// 	try {
// 		// const response = await fetch(API_URL.allCountries());
// 		const response = await fetch('http://localhost:3000/api/countries', {
// 			method: 'GET',
// 			headers: {
// 				'Content-type': 'application/json'
// 			}
// 		});

// 		if (!response.ok || response.status === 404) return;

// 		const data = await response.json();

// 		return data;
// 	} catch (e) {
// 		throw new Error('Fetching data error');
// 	}
// };
