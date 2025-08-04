"use client"

import dynamic from "next/dynamic"
import Link from "next/link";
const TiltedCard = dynamic(() => import("@/components/TiltedCard"), { ssr: false });

export default function Projects() {
    
    return <div>
        This page is still under construction...
        <div className="projects-wrap pt-4 flex flex-wrap align-center gap-6">
            <a target="_blank" href="https://herobite.vercel.app/">
                <TiltedCard
                    imageSrc="../../../../herobiteSS.png"
                    altText="HeroBite"
                    captionText="HeroBite live site"
                    containerHeight="200px"
                    containerWidth="200px"
                    imageHeight="200px"
                    imageWidth="200px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="tilted-card-demo-text text-xs">
                            Hero Bite
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
                    imageWidth="200px"
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
                    imageWidth="200px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="tilted-card-demo-text text-xs">
                            Quizzical App
                        </p>
                    }
                />
            </a>

        </div>
    </div>
}