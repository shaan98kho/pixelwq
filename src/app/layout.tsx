import "./globals.css"
import Header from "@/components/Header"
import { Roboto_Flex } from 'next/font/google'
import SplashCursor from "@/components/SplashCursor"

const roboto = Roboto_Flex({
	 weight: 'variable',
	 subsets: ['latin'],
	 axes: ['opsz'],
	 display: 'swap',
  })

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	
	return (
		<html lang="en" className={`scroll-smooth ${roboto.className}`}>
			<body>
				<Header/>
				<main className="px-8 pt-22">
					{children}
					<SplashCursor />
				</main>
			</body>
		</html>
	);
}
