"use client"

import dynamic from "next/dynamic"
import { useRef } from "react"

const VariableProximity = dynamic(() => import("@/components/VariableProximity"), { ssr: false });

export default function Home() {
	const containerRef = useRef(null)
	
	return (
		<div className="text-center text-sm">
			<h1 className="text-2xl">Hi! I'm Wen Qi</h1>
			<h2 className="text-2xl">I'm a frontend dev from Malaysia who cares deeply about clean UI and thoughtful interactions.</h2>
			<br/>
			<ul className=" flex flex-col gap-2 pb-4">
				<li>When I'm not coding you'll probably find me behind a drum kit,<br/>I picked it up a few months ago and I love how it keeps my mind sharp and my wrists strong.<br/>You can follow my drumming journey <a href="https://open.spotify.com/playlist/6HMbKdCgYOQi4JJapks6D0?si=7dcf45e87322443d" target="_blank" className="underline">HERE</a> C:</li>
				<li>I also do aerial yoga every week, balancing myself while being upside-down on a silk hammock has taught me to stay calm under pressure</li>
				<li>And I love to draw too! My passion in art lies in human portraits. This forces me to slow down and see the world in new ways.</li> 
			</ul>
			<p>Those three things:</p>
			<div
			ref={containerRef}
			style={{position: 'relative'}}
			className="variable-proximity text-lg"
			>
				<VariableProximity
					label={'rhythm, balance, and observation'}
					className={'variable-proximity-demo'}
					fromFontVariationSettings="'wght' 400, 'opsz' 9"
					toFontVariationSettings="'wght' 1000, 'opsz' 40"
					containerRef={containerRef}
					radius={100}
					falloff='gaussian'
				/>
			</div>
			<p>are what drive me both in and out of work.</p>
		</div>
	);
}
