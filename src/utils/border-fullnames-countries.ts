import { API_URL } from '../config/config-url-api';

export default async function returnFullNamesBorder(borders: string[]) {
	const response = await fetch(API_URL.allCountries());

	if (!response.ok || response.status === 404) return;

	const dataBorders = await response.json();

	if (borders[0] === 'N/A') return borders;

	let namedBorders: string[] = [];
	for (let i = 0; i < dataBorders.length; i++) {
		borders.filter((border: any) => {
			if (border === dataBorders[i].cca3) {
				namedBorders.push(dataBorders[i].name.common);
			}
		});
	}

	return namedBorders;
}

// borders: [ 'BOL', 'BRA', 'CHL', 'PRY', 'URY' ],
//       fullNamesBorder: [ 'Brazil', 'Bolivia' ],
