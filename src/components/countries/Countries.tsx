import { CountriesProps } from '../../types/countries-types';
import CountriesData from './CountriesData';

export function Countries({ countries }: { countries: CountriesProps }) {
	return (
		<>
			<CountriesData countries={countries} />
		</>
	);
}
