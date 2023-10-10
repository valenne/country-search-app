import { Countries } from '../components/countries/Countries';
import { useFetchCountries } from '../hooks/useFetchCountries';

export default async function Home() {
	const countries = await useFetchCountries();

	if (!countries) return;

	return (
		<main>
			<Countries countries={countries} />
		</main>
	);
}
