import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import { ThemeProvider } from '../components/provider/theme-provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Countries App',
	description: 'search for information on the country of your choice'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} bg-[#FFCDBC] dark:bg-[#130303]`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem>
					{/* <ThemeSwitcher /> */}
					<Header />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
