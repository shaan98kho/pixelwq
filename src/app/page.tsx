"use client"

import { useState } from "react"
import Header from "@/components/Header"
import HomeContent from '@/components/Home'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export type Section = 'home' | 'about' | 'projects' | 'contact'

export default function Home() {
	const [active, setActive] = useState<Section>('home')
	const togglePage = (section: Section) => setActive(section)
	
	return (
		<div className="">
			<Header toggleSection={togglePage}/>
			<main className="py-4 px-8">
				{active === 'home'     && <HomeContent />}
				{active === 'about'    && <About />}
				{active === 'projects' && <Projects />}
				{active === 'contact'  && <Contact />}
			</main>
		</div>
	);
}
