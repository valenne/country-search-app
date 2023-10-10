/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import { useFetchCountry } from '../../../hooks/useFetchCountry';
import { formatNumberToLocal } from '../../../utils/format-numbers';

export default async function page({
	params,
	searchParams
}: {
	params: { name: string };
	searchParams: { capital: string };
}) {
	const nameCountry = params.name;
	const capitalCountry = searchParams.capital;

	const test = await useFetchCountry(nameCountry, capitalCountry);

	// terminar esto
	return (
		<div className='px-20 mb-10'>
			<div className='mb-24 '>
				<button className='rounded-lg text-center px-4 py-2 bg-slate-700 text-white hover:bg-slate-300 hover:text-black transition-all duration-200 ease-linear'>
					<a href='/'>back</a>
				</button>
			</div>
			<div className='mx-auto'>
				{test &&
					test.map((country: any) => (
						<div
							className='flex flex-col gap-10 mx-auto place-items-center'
							key={country?.name.common}>
							<div>
								<h2 className='text-4xl font-bold text-center'>
									{country.name?.common?.charAt(0).toUpperCase() + country.name?.common?.slice(1)}
								</h2>
							</div>

							<div className='w-fit lg:grid lg:grid-cols-3 gap-5 flex flex-col  mx-auto'>
								<picture className='w-fit lg:w-fit mx-auto mb-10  col-span-1 row-span-1 lg:pt-0'>
									<img
										className='w-[450px] h-full object-cover lg:w-full mx-auto shadow-xl rounded-lg border-2 border-transparent hover:border-slate-500 transition-all ease-linear duration-200'
										src={country?.flags?.png}
										alt={country?.flags?.alt}
									/>
								</picture>

								<div className='col-start-2 col-end-3 lg:pl-6'>
									<div className='flex flex-col gap-2'>
										<div className='flex flex-row gap-2 place-items-center flex-wrap'>
											<p className='font-semibold text-lg '>Native Name:</p>
											<p className='font-light '>{country?.name.official}</p>
										</div>
										<div className='flex flex-row gap-2 place-items-center flex-wrap'>
											<p className='font-semibold text-lg'>Population:</p>
											<p className='font-light '>
												{formatNumberToLocal('es', country?.population)}
											</p>
										</div>
										<div className='flex flex-row gap-2 place-items-center flex-wrap'>
											<p className='font-semibold text-lg'>Region:</p>
											<p className='font-light '>{country?.region}</p>
										</div>
										<div className='flex flex-row gap-2 place-items-center flex-wrap'>
											<p className='font-semibold text-lg'>Sub Region:</p>
											<p className='font-light'>{country?.subregion}</p>
										</div>
										<div className='flex flex-row gap-2 place-items-center flex-wrap'>
											<p className='font-semibold text-lg'>Capital:</p>
											<p className='font-light '>{country?.capital}</p>
										</div>
									</div>
								</div>

								<div className='col-start-3 cold-end-4'>
									<div className='flex flex-col gap-2'>
										<div className='flex flex-row gap-2 place-items-center flex-wrap'>
											<p className='font-semibold text-lg'>Top Level Domain:</p>
											<p className='font-light'>{country?.tld}</p>
										</div>
										<div className='flex flex-row gap-2 place-items-center flex-wrap'>
											<p className='font-semibold text-lg'>Currencies:</p>
											<p className=' font-light '>{country?.currencies?.name}</p>
										</div>
										<div className='flex flex-row gap-2 place-items-center flex-wrap'>
											<p className='font-semibold text-lg'>Languages:</p>
											<ul className='flex flex-row gap-1'>
												{country?.languages?.map((lang: string) => (
													<li className='block font-light'>
														<span className='text-md font-semibold rounded-md px-3 py-1 inline-block bg-slate-700  text-white hover:bg-slate-300 hover:text-black transition-all ease-linear duration-150'>
															{lang}
														</span>
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
								<div className='flex flex-row gap-2 flex-wrap col-start-2 col-end-4 lg:place-content-center'>
									<p className='font-semibold text-lg'>Border Countries: </p>

									{country?.fullNamesBorder?.map((borderCountry: string) => (
										<span className='inline-block px-3 py-1 bg-slate-700 rounded-md text-white hover:bg-slate-300 hover:text-black font-semibold transition-all ease-linear duration-150'>
											{borderCountry}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}
