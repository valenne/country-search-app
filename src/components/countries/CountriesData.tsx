/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import useValidateCountries from '../../hooks/useValidateCountries';
import { CountriesProps } from '../../types/countries-types';
import { formatNumberToLocal } from '../../utils/format-numbers';
import { roundedFollowers } from '../../utils/rounded-population';

export default function CountriesData({ countries }: { countries: CountriesProps }) {
	const { handleOnChange, handleOnSelect, handleClickOrden, validateCountries, regions } =
		useValidateCountries(countries);

	return (
		<>
			<section className='section-input flex flex-col sm:flex-row gap-6 sm:gap-2 sm:justify-center mx-12 mb-40 transition-all duration-200 ease-linear'>
				<div className='flex flex-row gap-2 justify-center'>
					<div className=''>
						<input
							type='text'
							placeholder='Search for a country...'
							className='h-[40px] px-3 py-2 w-[200px] lg:w-[400px] leading-normal rounded-lg transition-all duration-200 ease-linear bg-[#130303] text-[#FFCDBC] dark:bg-[#FFCDBC] dark:text-[#130303] placeholder:text-[#FFCDBC] dark:placeholder:text-[#130303] placeholder:opacity-40 font-semibold border-2 border-transparent focus:outline-none focus:ring-0 focus:border-[#F5853F]'
							onChange={handleOnChange}
						/>
					</div>
					<div>
						<select
							name='continent'
							id='continent'
							className='px-3 py-2 h-[40px] rounded-lg bg-[#130303] text-[#FFCDBC] dark:bg-[#FFCDBC] dark:text-[#130303] font-semibold border-2 border-transparent focus:outline-none focus:ring-0 focus:border-[#F5853F]'
							onChange={handleOnSelect}>
							<option
								key={0}
								value=''
								className='leading-normal'>
								Select a region
							</option>
							{regions?.map((region, _index) => (
								<option
									key={_index + 1}
									value={region.toLowerCase()}
									className='leading-normal'>
									{region}
								</option>
							))}
						</select>
					</div>
				</div>

				<div className='min-w-min flex-row gap-2 flex items-center justify-center'>
					<button
						type='button'
						className='h-[40px] font-semibold shrink-0 w-fit px-2 py-2 border border-[#F5853F] rounded-lg text-sm bg-[#130303] text-[#FFCDBC] hover:bg-[#F5853F] hover:text-[#130303] dark:bg-[#FFCDBC] dark:text-[#130303] dark:hover:bg-[#130303] dark:hover:text-[#FFCDBC]  transition-all duration-150 ease-linear'
						onClick={handleClickOrden}
						value='az'>
						A to Z
					</button>
					<button
						type='button'
						className='h-[40px] font-semibold shrink-0 w-fit px-2 py-1 border border-[#F5853F] rounded-lg text-sm bg-[#130303] text-[#FFCDBC] hover:bg-[#F5853F] hover:text-[#130303] dark:bg-[#FFCDBC] dark:text-[#130303] dark:hover:bg-[#130303] dark:hover:text-[#FFCDBC]  transition-all duration-150 ease-linear'
						onClick={handleClickOrden}
						value='za'>
						Z to A
					</button>
				</div>
			</section>
			<section>
				<div className='mx-12'>
					<ul className='w-full grid grid-cols-2 gap-x-10 gap-y-20 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
						{validateCountries?.map(
							(
								country: Pick<
									CountriesProps,
									'name' | 'population' | 'capital' | 'flags' | 'region'
								> & { id: string },
								index: number
							) => (
								<li key={index}>
									<div className='max-w-[300px] max-h-[378px] bg-white border border-black rounded-lg shadow dark:bg-gray-800 dark:border-white text-ellipsis dark:hover:border-yellow-500 transition-all ease-linear duration-200 hover:contrast-150 hover:border-cyan-400'>
										<Link
											href={`/country/${country.name.common.toLowerCase()}?capital=${country.capital[0].toLowerCase()}`}>
											<img
												className='w-[300px] max-h-[170px] rounded-t-lg aspect-video object-cover'
												src={country.flags.png}
												alt={country.flags.alt}
											/>
										</Link>
										<div className='p-3'>
											<h4 className='line-clamp-1 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
												{country.name.common}
											</h4>
											<div className='flex flex-col gap-2'>
												<div className='relative group/population w-full flex flex-row gap-2 items-center text-sm md:text-base'>
													<div className='flex flex-row gap-2'>
														<span className='font-semibold'>Population:</span>
														<p className='w-fit font-normal text-gray-700 dark:text-gray-400'>
															{roundedFollowers(country.population)}
														</p>
														{/* hover population */}
														<span className='absolute translate-x-3/4 bottom-6 left-6 bg-black px-2 py-1 rounded-lg opacity-0 group-hover/population:opacity-100 transition-all duration-200 ease-linear text-white'>
															{formatNumberToLocal('es', country.population)}
														</span>
													</div>
												</div>

												<div className='flex flex-row gap-2'>
													<span className='inline-block font-semibold'>Region:</span>
													<p className='font-normal text-gray-700 dark:text-gray-400'>
														{country.region}
													</p>
												</div>

												<div className='w-full flex flex-row gap-2'>
													<span className='inline-block font-semibold'>Capital: </span>
													<p className='w-full font-normal text-gray-700 dark:text-gray-400 text-ellipsis overflow-hidden line-clamp-1'>
														{country.capital}
													</p>
												</div>
											</div>
										</div>
									</div>
								</li>
							)
						)}
						{countries.length === 0 && <p className='text-center'>Loading...</p>}
					</ul>
				</div>
			</section>
		</>
	);
}
