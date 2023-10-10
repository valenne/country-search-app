import { ThemeSwitcher } from './helper/ThemeSwitcher';

function Header() {
	return (
		<div className='header py-8 mb-10'>
			<header className='mx-12'>
				<div className='flex flex-row justify-between'>
					<div>
						<h1 className='text-3xl font-bold dark:text-white'>Where in the world?</h1>
					</div>
					<ThemeSwitcher />
				</div>
			</header>
		</div>
	);
}

export default Header;
