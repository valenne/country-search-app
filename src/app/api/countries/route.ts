import { API_URL } from '../../../config/config-url-api';
import { CountriesProps } from '../../../types/countries-types';

export async function GET(req: Request, res: Response) {
	try {
		const response = await fetch(API_URL.allCountries(), {
			method: 'GET',
			headers: {
				'Content-type': 'application/json'
			}
		});

		if (!response.ok || response.status === 404) return;

		const data = await response.json();

		const customDataReturn:
			| Pick<CountriesProps, 'name' | 'population' | 'capital' | 'flags' | 'region'> & {
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

		return new Response(JSON.stringify(customDataReturn));
	} catch (e) {
		throw new Error('api not response');
	}
}
