export const useFetchCountries = async () => {
	try {
		// const response = await fetch(API_URL.allCountries());
		const response = await fetch('http://localhost:3000/api/countries', {
			method: 'GET',
			headers: {
				'Content-type': 'application/json'
			},
			next: { revalidate: 60 }
		});

		if (!response.ok || response.status === 404) return;

		const data = await response.json();

		return data;
	} catch (e) {
		throw new Error('Fetching data error');
	}
};
