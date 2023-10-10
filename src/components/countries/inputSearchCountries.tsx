'use client';
import { ReactElement } from 'react';

export default function InputSearchCountries(): ReactElement<HTMLInputElement> {
	const handleOnChange = async (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		let typeInput = e.target.value;

		if (!typeInput || typeInput.length === 0) {
			return;
		}
	};

	return (
		<div className='mx-12 mb-10 '>
			<input
				type='text'
				placeholder='Search for a country...'
				className='px-3 py-2 w-[400px]'
				onChange={handleOnChange}
			/>
		</div>
	);
}
