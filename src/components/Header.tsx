"use client"
import dynamic from "next/dynamic"
import { Section } from "@/app/page"

const GlassSurface = dynamic(() => import("@/components/GlassSurface"), { ssr: false });
const Aurora = dynamic(() => import("@/components/Aurora"), { ssr: false });

interface HeaderProps {
    toggleSection: (sxn: Section) => void
}

export default function Header({toggleSection}: HeaderProps) {
    return <header className="p-4">
        <Aurora
        colorStops={["#7cff67", "#b19eef", "#5227ff"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
        />
        <GlassSurface
        width={'100%'}
        height={50}
        borderRadius={30}
        borderWidth={0.07}
        saturation={1}
        displace={0.5}
        distortionScale={-180}
        blur={11}
        redOffset={0}
        greenOffset={10}
        blueOffset={20}
        brightness={50}
        opacity={0.93}
        >
            <ul className="flex gap-8">
                <li className="cursor-pointer" onClick={() => toggleSection('home')}>Home</li>
                <li className="cursor-pointer" onClick={() => toggleSection('about')}>About</li>
                <li className="cursor-pointer" onClick={() => toggleSection('projects')}>Projects</li>
                <li className="cursor-pointer" onClick={() => toggleSection('contact')}>Contact Me</li>
            </ul>
        </GlassSurface>
    </header>
}