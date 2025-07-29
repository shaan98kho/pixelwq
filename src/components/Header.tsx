"use client"
import dynamic from "next/dynamic"

const GlassSurface = dynamic(() => import("@/components/GlassSurface"), { ssr: false });
const Aurora = dynamic(() => import("@/components/Aurora"), { ssr: false });

export default function Header() {
    return <header>
        <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
        />
        <GlassSurface
        width={'100%'}
        height={60}
        displace={15}
        distortionScale={-150}
        redOffset={5}
        greenOffset={15}
        blueOffset={25}
        brightness={60}
        opacity={0.8}
        mixBlendMode="screen"
        className="m-4"
        >
            <span>Advanced Glass Distortion</span>
        </GlassSurface>
    </header>
}