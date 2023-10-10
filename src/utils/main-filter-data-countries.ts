import { CountriesProps } from '../types/countries-types';
import { SearchInputsProps } from '../types/general-types';
import { sortedCountries } from './sortedCoutries';

// function thats filters the information regard a value
export const mainFilterDataCountries = (
	countries: CountriesProps[],
	{ searchText, typeInput, orden, regionFilter }: SearchInputsProps
) => {
	let filteredCountry: any = countries;

	if (typeInput === 'onchange') {
		const filteredCountriesOnChange = countries.filter((country) => {
			const countryLowerCase = country.name.common.toLocaleLowerCase();
			const regionLowerCase = country.region.toLocaleLowerCase();
			return (
				countryLowerCase.startsWith(searchText.toLocaleLowerCase()) &&
				regionLowerCase.includes(regionFilter.toLocaleLowerCase())
			);
		});
		filteredCountry = filteredCountriesOnChange;
	}

	if (typeInput === 'onselect') {
		const filteredCountriesOnSelect = countries.filter((country) => {
			const countryRegionLowerCase = country.region.toLocaleLowerCase();
			const countryLowerCase = country.name.common.toLocaleLowerCase();
			return (
				countryRegionLowerCase.includes(regionFilter.toLocaleLowerCase()) &&
				countryLowerCase.startsWith(searchText.toLocaleLowerCase())
			);
		});
		filteredCountry = filteredCountriesOnSelect;
	}

	return sortedCountries(filteredCountry, { order: orden });
};
