"use client"

import dynamic from "next/dynamic"
import { useRef } from "react"
import Link from "next/link"
const TiltedCard = dynamic(() => import("@/components/TiltedCard"), { ssr: false });
const VariableProximity = dynamic(() => import("@/components/VariableProximity"), { ssr: false });

export default function Projects() {
    const containerRef = useRef(null)
    
    return <div>
        <p className="inline pr-1 text-lg">View all my projects' repositories on my</p> 
        <a className="font-bold" target="_blank" href="https://github.com/shaan98kho"><div
			ref={containerRef}
			style={{position: 'relative'}}
			className="variable-proximity text-lg inline"
			>
				<VariableProximity
					label={'GitHub'}
					className={'variable-proximity-demo cursor-pointer'}
					fromFontVariationSettings="'wght' 400, 'opsz' 9"
					toFontVariationSettings="'wght' 1000, 'opsz' 40"
					containerRef={containerRef}
					radius={100}
					falloff='gaussian'
				/>
        </div></a>
        
        <div className="projects-wrap pt-4 flex flex-wrap align-center gap-6">
            <a target="_blank" href="https://herobite.vercel.app/">
                <TiltedCard
                    imageSrc="../../../../herobiteSs.png"
                    altText="HeroBite"
                    captionText="HeroBite live site"
                    containerHeight="200px"
                    containerWidth="200px"
                    imageHeight="200px"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="tilted-card-demo-text text-xs">
                            Hero Bite - A Surplus Food Marketplace
                        </p>
                    }
                />
            </a>
            <a target="_blank" href="https://github.com/shaan98kho/Nutritsy">
                <TiltedCard
                    imageSrc="../../../../splash.png"
                    altText="Nutritsy"
                    captionText="Nutritsy GitHub Repo"
                    containerHeight="200px"
                    containerWidth="200px"
                    imageHeight="200px"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="tilted-card-demo-text text-xs">
                            Nutritsy - Meal Planning Mobile App
                        </p>
                    }
                />
            </a>
            <a target="_blank" href="https://movies-watch-list-lime.vercel.app/">
                <TiltedCard
                    imageSrc="../../../../moviesWatchListSS.png"
                    altText="HeroBite"
                    captionText="Movies Watchlist live site"
                    containerHeight="200px"
                    containerWidth="200px"
                    imageHeight="200px"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="tilted-card-demo-text text-xs">
                            Movies Watchlist
                        </p>
                    }
                />
            </a>
            <a target="_blank" href="https://wq-quizzical.netlify.app/">
                <TiltedCard
                    imageSrc="../../../../quizzicalSs.png"
                    altText="Quizzical App"
                    captionText="Trivial Quiz live site"
                    containerHeight="200px"
                    containerWidth="200px"
                    imageHeight="200px"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="tilted-card-demo-text text-xs">
                            Quizzical App - Trivial Quiz
                        </p>
                    }
                />
            </a>
            <a target="_blank" href="https://countdown-timer-two-tau.vercel.app/">
                <TiltedCard
                    imageSrc="../../../../cdTimer.png"
                    altText="Countdown Timer"
                    captionText="Countdown Timer Live Site"
                    containerHeight="200px"
                    containerWidth="200px"
                    imageHeight="200px"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="tilted-card-demo-text text-xs">
                            Countdown Timer
                        </p>
                    }
                />
            </a>
            <a target="_blank" href="https://wq-vanlife.netlify.app/">
                <TiltedCard
                    imageSrc="../../../../vanlife.png"
                    altText="Vanlife trading app"
                    captionText="Vanlife Live Site"
                    containerHeight="200px"
                    containerWidth="200px"
                    imageHeight="200px"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="tilted-card-demo-text text-xs">
                            Vanlife 
                        </p>
                    }
                />
            </a>

        </div>
    </div>
}