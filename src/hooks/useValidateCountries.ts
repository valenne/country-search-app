import { useEffect, useState } from 'react';
import { CountriesProps } from '../types/countries-types';
import { SearchInputsProps } from '../types/general-types';
import { mainFilterDataCountries } from '../utils/main-filter-data-countries';

// agregar una propiedad region, y que persista el valor del input text en la busqueda del pais
export default function useValidateCountries(countries: any) {
	const [validateCountries, setValidateCountries] = useState(countries);
	const [searchInput, setSearchInput] = useState<SearchInputsProps>({
		searchText: '',
		typeInput: 'onchange',
		orden: 'az',
		regionFilter: ''
	});

	// mapped just a regions values
	let regions: string[] = [];

	countries.map((country: CountriesProps) => {
		if (regions.includes(country.region)) {
			return;
		}
		regions.push(country.region);
	});

	// handle change event typing by user
	const handleOnChange = async (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		let searchValue = e.target.value;
		if (searchValue.includes(' ')) {
			return;
		}

		setSearchInput({ ...searchInput, searchText: searchValue, typeInput: 'onchange' });
	};

	// handle select region
	const handleOnSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		let searchValue = e.target.value;
		setSearchInput({ ...searchInput, regionFilter: searchValue, typeInput: 'onselect' });
	};

	// handle orden by click
	const handleClickOrden = (e: React.MouseEvent<HTMLButtonElement>) => {
		let searchValue = e.currentTarget.value;
		setSearchInput({ ...searchInput, orden: searchValue === 'az' ? 'az' : 'za' });
	};

	useEffect(() => {
		const response = mainFilterDataCountries(countries, searchInput);
		setValidateCountries(response);
	}, [searchInput, countries]);

	return { handleOnChange, handleOnSelect, handleClickOrden, validateCountries, regions };
}
