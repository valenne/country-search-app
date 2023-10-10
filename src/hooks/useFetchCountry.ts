export const useFetchCountry = async (name: string, capital: string) => {
	try {
		const response = await fetch(`http://localhost:3000/api/country/${name}`, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
				capital
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
