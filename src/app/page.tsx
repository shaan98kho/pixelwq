"use client"

import dynamic from "next/dynamic"
import { useRef } from "react"
// import '@react-bits/text-animations/variable-proximity/dist/tailwind.css'

const VariableProximity = dynamic(() => import("@/components/VariableProximity"), { ssr: false });

export default function Home() {
	const containerRef = useRef(null)
	
	return (
		<div className="text-center">
			<h1 className="text-lg">Hi, I'm Wen Qi 👋</h1>
			<h2 className="text-lg">I'm a frontend dev from Malaysia</h2>
			<br/>
			<ul className="text-sm flex flex-col gap-2 pb-4">
				<li>When I'm not coding you'll find me behind a drum kit 🥁 <br/>I picked it up a few months ago and I love how it keeps my mind sharp and my wrists strong.</li>
				<li>I also do aerial yoga every week...balancing upside-down on a silk hammock has taught me to stay calm under pressure.</li>
				<li>And I love to draw, my passion in art lies in human portraits! It forces me to slow down and see the world in new ways.</li> 
			</ul>
			<p>Those three things: rhythm, balance, and observation</p>
			{/* <div
			ref={containerRef}
			style={{position: 'relative'}}
			>
				<VariableProximity
					label={'rhythm, balance, and observation'}
					className={'variable-proximity-demo'}
					fromFontVariationSettings="'wght' 400, 'opsz' 9"
					toFontVariationSettings="'wght' 1000, 'opsz' 40"
					containerRef={containerRef}
					radius={100}
					falloff='linear'
				/>
			</div> */}
			<p>are what drive me both in and out of work.</p>
		</div>
	);
}
