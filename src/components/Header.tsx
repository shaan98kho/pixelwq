"use client"
import dynamic from "next/dynamic"
import Link from "next/link"
import { usePathname } from "next/navigation"

const GlassSurface = dynamic(() => import("@/components/GlassSurface"), { ssr: false });
const Aurora = dynamic(() => import("@/components/Aurora"), { ssr: false });

export default function Header() {
    const path = usePathname()

    return <header>
        <Aurora
        colorStops={["#7cff67", "#b19eef", "#5227ff"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
        />
        <GlassSurface
        width={'unset'}
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
        className='fixed z-[2] right-3 left-3 top-4'
        >
            <ul className="flex gap-8 font-bold text-center">
                <Link href="/"><li className={`cursor-pointer ${path === '/' ? "active" : ""}`}>Home</li></Link>
                <Link href="/about"><li className={`cursor-pointer ${path === '/about' ? "active" : ""}`}>About</li></Link>
                <Link href="projects"><li className={`cursor-pointer ${path === '/projects' ? "active" : ""}`}>Projects</li></Link>
                <Link href="contact"><li className={`cursor-pointer ${path === '/contact' ? "active" : ""}`}>Contact Me</li></Link>
            </ul>
        </GlassSurface>
    </header>
}