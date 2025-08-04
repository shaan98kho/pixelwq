"use client"

import Image from 'next/image'
import dynamic from "next/dynamic"
import { useRef } from 'react'
const VariableProximity = dynamic(() => import("@/components/VariableProximity"), { ssr: false });


export default function About() {
    const containerRef = useRef(null)
    const feStack: string[] = ['javascript', 'typescript', 'react', 'nextjs', 'flutter', 'redux', 'sass', 'tailwindcss', 'bootstrap', 'html5', 'jquery']
    const beStack: string[] = ['firebase', 'java', 'python', 'mysql', 'php']
    const tools: string[] = ['git', 'gitlab', 'figma', 'jira', 'github']
    // const testingTools: string[] = ['jest']

    const generateIcons = (arr: string[]) => {
        return arr.map((item, idx) => <Image width={40} height={40} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item}/${item}-original.svg`} alt={`${item} logo`}  key={`${item}${idx}`}/>)
    }
    const feIcons = generateIcons(feStack)
    const beIcons = generateIcons(beStack)
    const toolsIcons = generateIcons(tools)
    const testingIcons = <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"  alt="jest logo"  />
    return <div>
        <p className='text-center text-sm inline'>I build responsive, user-centered web apps with</p>
         <div
			ref={containerRef}
			style={{position: 'relative'}}
            className='variable-proximity text-center inline px-1'
			>
				<VariableProximity
					label={'React.js, Next.js, TypeScript, Zustand & Firebase'}
					className={'variable-proximity-demo'}
					fromFontVariationSettings="'wght' 400, 'opsz' 9"
					toFontVariationSettings="'wght' 1000, 'opsz' 40"
					containerRef={containerRef}
					radius={100}
					falloff='gaussian'
				/>
			</div>
        <p className='text-center text-sm inline'>while optimizing performance, accessibility, and clean architecture along the way. With a background in UI development and 1 year of hands-on experience translating Figma designs into scalable interfaces (HTML, SCSS, JavaScript & jQuery), I thrive on collaborating across disciplines and continuously strengthening my core JavaScript fundamentals.</p>
        <div className='flex flex-col align-center justify-center pt-4 font-bold'>
            <h2 className='text-lg pb-4'>Tech Stack</h2>
            <h4 className='text-lg pb-2'>Front End:</h4>
            <div className="flex gap-2 pb-6 flex-wrap">
                {feIcons}
            </div>            
            <h4 className='text-lg pb-2'>Back End/Database:</h4>
            <div className="flex gap-2 pb-6 flex-wrap">
                {beIcons}
            </div>            
            <h4 className='text-lg pb-2'>Tools:</h4>
            <div className="flex gap-2 pb-6 flex-wrap">
                {toolsIcons}
            </div>            
            <h4 className='text-lg pb-2'>Testing:</h4>
            <div className="flex gap-2 flex-wrap">
                {testingIcons}
            </div>
        </div>
    </div>
}