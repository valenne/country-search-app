export type CountriesProps = {
	length: number;
	map(
		arg0: (country: CountriesProps, index: number) => import('react').JSX.Element
	): import('react').ReactNode;
	name: Name;
	tld: string[];
	cca2: string;
	ccn3: string;
	cca3: string;
	cioc: string;
	independent: boolean;
	status: string;
	unMember: boolean;
	currencies: Currencies;
	idd: Idd;
	capital: string[];
	altSpellings: string[];
	region: string;
	subregion: string;
	languages: Languages;
	translations: { [key: string]: Translation };
	latlng: number[];
	landlocked: boolean;
	borders: string[];
	area: number;
	demonyms: Demonyms;
	flag: string;
	maps: Maps;
	population: number;
	gini: Gini;
	fifa: string;
	car: Car;
	timezones: string[];
	continents: string[];
	flags: Flags;
	coatOfArms: CoatOfArms;
	startOfWeek: string;
	capitalInfo: CapitalInfo;
	postalCode: PostalCode;
};

export type CapitalInfo = {
	latlng: number[];
};

export type Car = {
	signs: string[];
	side: string;
};

export type CoatOfArms = {
	png: string;
	svg: string;
};

export type Currencies = {
	NPR: Npr;
};

export type Npr = {
	name: string;
	symbol: string;
};

export type Demonyms = {
	eng: Eng;
	fra: Eng;
};

export type Eng = {
	f: string;
	m: string;
};

export type Flags = {
	png: string;
	svg: string;
	alt: string;
};

export type Gini = {
	'2010': number;
};

export type Idd = {
	root: string;
	suffixes: string[];
};

export type Languages = {
	nep: string;
};

export type Maps = {
	googleMaps: string;
	openStreetMaps: string;
};

export type Name = {
	common: string;
	official: string;
	nativeName: NativeName;
};

export type NativeName = {
	nep: Translation;
};

export type Translation = {
	official: string;
	common: string;
};

export type PostalCode = {
	format: string;
	regex: string;
};

// Pick<
// 					CountriesProps,
// 					| 'name'
// 					| 'flags'
// 					| 'population'
// 					| 'region'
// 					| 'subregion'
// 					| 'capital'
// 					| 'tld'
// 					| 'borders'
// 					| 'languages'

// 				>
