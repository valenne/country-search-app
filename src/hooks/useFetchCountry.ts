import { API_URL } from '../config/config-url-api';
import returnFullNamesBorder from '../utils/border-fullnames-countries';

// export const useFetchCountry = async (name: string, capital: string) => {
// 	try {
// 		const response = await fetch(`http://localhost:3000/api/country/${name}`, {
// 			method: 'GET',
// 			headers: {
// 				'Content-type': 'application/json',
// 				capital
// 			},
// 			next: { revalidate: 60 }
// 		});
// 		``;
// 		if (!response.ok || response.status === 404) return;

// 		const data = await response.json();

// 		return data;
// 	} catch (e) {
// 		throw new Error('Fetching data error');
// 	}
// };

export const useFetchCountry = async (name: string, capital: string) => {
	try {
		const response = await fetch(API_URL.countriesByName(name));

		if (!response.ok || response.status === 404) return;

		const data = await response.json();

		// grab country borders
		const [borders] = data.map((coun: any) => {
			if (coun.borders === undefined) return ['N/A'];
			return coun.borders;
		});

		const fullNameBorders = await returnFullNamesBorder(borders);

		if (!fullNameBorders || fullNameBorders.length === 0) return;

		const countryDataReturn = data.map((country: any) => {
			for (let i = 0; i < country.capital.length; i++) {
				if (country.capital[i].toLocaleLowerCase() === capital?.toLocaleLowerCase()) {
					const arrLang = Object.values(country.languages);

					const [arrCurrencies] = Object.values(country.currencies);

					return {
						name: {
							common: country.name.common,
							official: country.name.official
						},
						flags: {
							png: country.flags.png,
							alt: country.flags.alt
						},
						population: country.population,
						region: country.region,
						subregion: country.subregion,
						capital: country.capital,
						tld: country.tld,
						languages: arrLang,
						borders: country.borders,
						fullNamesBorder: fullNameBorders && fullNameBorders,
						currencies: arrCurrencies
					};
				}
			}
		});

		return countryDataReturn;
	} catch (err) {
		throw new Error('Error into access to a specific country');
	}
};
