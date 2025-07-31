import "./globals.css"
import Header from "@/components/Header"

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body>
				<Header/>
				<main className="px-8 pt-22">
					{children}
				</main>
			</body>
		</html>
	);
}
