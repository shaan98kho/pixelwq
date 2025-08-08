"use client"

import dynamic from "next/dynamic"
import { FaGithub, FaLink } from "react-icons/fa"
const TiltedCard = dynamic(() => import("@/components/TiltedCard"), { ssr: false });
const GlassSurface = dynamic(() => import("@/components/GlassSurface"), { ssr: false });

interface CardProps {
    caption: string,
    tooltipText?: string,
    techChips: string[],
    imgSrc: string,
    liveSite?: string,
    githubRepo?: string,
    projName: string
}

export default function Card({caption, techChips, imgSrc, liveSite, githubRepo, projName, tooltipText}: CardProps) {
    const techStack = techChips.map(chip => <span key={chip}>{chip}</span>)

    return <div className="flex flex-col items-center justify-start gap-y-3">
            <TiltedCard
                imageSrc={imgSrc}
                altText={projName}
                captionText={tooltipText}
                containerHeight="200px"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={tooltipText ? true : false}
                displayOverlayContent={true}
                overlayContent={
                    <p className="tilted-card-demo-text text-xs">
                        {caption}
                    </p>
                }
            />
            <div className="card-metadata flex flex-wrap gap-x-3">{techStack}</div>
            <div className="card-buttons flex gap-2 justify-center w-full mt-auto">
                {liveSite && <a href={liveSite} target="_blank" className="flex items-center gap-2">
                    <GlassSurface
                        width={'100%'}
                        height={40}
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
                        className='z-[51] px-2'
                        >
                            <FaLink className="text-base" /><span>Live</span>
                        </GlassSurface>
                </a>}
                {githubRepo && <a href={githubRepo} target="_blank" className="flex items-center gap-2">
                    <GlassSurface
                        width={'100%'}
                        height={40}
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
                        className='z-[51] px-2'
                        >
                            <FaGithub className="text-base"/><span>Code</span>
                        </GlassSurface>
                </a>}
            </div>
    </div>
}