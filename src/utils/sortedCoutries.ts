type OrdenProps = {
	order: 'az' | 'za';
};

export const sortedCountries = (obj: [], { order }: OrdenProps) => {
	// const { order } = orden;
	if (order === 'az') {
		return obj.sort((c1: { name: { common: string } }, c2: { name: { common: string } }) =>
			c1.name.common > c2.name.common ? 1 : -1
		);
	}
	if (order === 'za') {
		return obj.sort((c1: { name: { common: string } }, c2: { name: { common: string } }) =>
			c1.name.common < c2.name.common ? 1 : -1
		);
	}
};
