import { NextRequest } from 'next/server';
import { API_URL } from '../../../../config/config-url-api';
import returnFullNamesBorder from '../../../../utils/border-fullnames-countries';

export async function GET(req: NextRequest, res: Response) {
	const { pathname } = req.nextUrl;
	const countryName = pathname.split('/').pop();

	const capitalName = req.headers.get('capital');

	if (!countryName) {
		return new Response(JSON.stringify({ error: 'country was not found' }));
	}

	try {
		const response = await fetch(API_URL.countriesByName(countryName));

		if (!response.ok || response.status === 404) {
			return;
		}

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
				if (country.capital[i].toLocaleLowerCase() === capitalName?.toLocaleLowerCase()) {
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

		return new Response(JSON.stringify(countryDataReturn));
	} catch (e) {
		throw new Error('Country fetching error');
	}
}
