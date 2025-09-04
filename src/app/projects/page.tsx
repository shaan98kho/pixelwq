"use client"

import Card from "@/components/Card";

export default function Projects() {
    
    return <div>
        <p className="">These are the projects I built during my free time to stay sharp, explore modern stacks, and push beyond the legacy tech I use at work</p>
        <div className="projects-wrap pt-4 grid gap-6 grid-cols-[repeat(auto-fit,minmax(150px,1fr))] items-stretch">
            <Card 
                caption="Hero Bite - A Surplus Food Marketplace"
                techChips={["Next.js", "React.js", "TypeScript", "Zustand", "Firebase", "Tailwind CSS"]}
                imgSrc="../../../../herobiteSs.png"
                projName="HeroBite"
                liveSite="https://herobite.vercel.app/"
                githubRepo="https://github.com/shaan98kho/herobite"
                tooltipText="WIP"
            />
            <Card 
                caption="MintGecko - Crypto Dashboard"
                techChips={["React.js", "TypeScript", "Redux", "RESTful API", "React Router v7","Tailwind CSS"]}
                imgSrc="../../../../mintGeckoss.jpg"
                projName="MintGecko"
                liveSite="https://mintgecko.vercel.app/"
                githubRepo="https://github.com/shaan98kho/mintgecko"
                tooltipText="WIP"
            />
            <Card 
                caption="Nutritsy - Meal Planning Mobile App"
                techChips={["Flutter", "Kotlin", "Firebase"]}
                imgSrc="../../../../splash.png"
                projName="Nutritsy"
                githubRepo="https://github.com/shaan98kho/Nutritsy"
            />
            <Card 
                caption="Movies Watchlist"
                techChips={["React.js", "TypeScript"]}
                imgSrc="../../../../moviesWatchListSS.png"
                projName="movies watchlist"
                liveSite="https://movies-watch-list-lime.vercel.app/"
                githubRepo="https://github.com/shaan98kho/moviesWatchList"
            />
            <Card 
                caption="Quizzical - Trivial Quiz App"
                techChips={["React.js"]}
                imgSrc="../../../../quizzicalSs.png"
                projName="quizzical"
                liveSite="https://wq-quizzical.netlify.app/"
                githubRepo="https://github.com/shaan98kho/quizzical-app"
            />
            <Card 
                caption="Countdown Timer"
                techChips={["React.js, TypeScript"]}
                imgSrc="../../../../cdTimer.png"
                projName="cdtimer"
                liveSite="https://countdown-timer-two-tau.vercel.app/"
                githubRepo="https://github.com/shaan98kho/countdownTimer"
            />
            <Card 
                caption="Van Life"
                techChips={["React.js"]}
                imgSrc="../../../../vanlife.png"
                projName="vanlife"
                liveSite="https://wq-vanlife.netlify.app/"
                githubRepo="https://github.com/shaan98kho/vanlife"
                tooltipText="Scrimba Course Led Project"
            />

        </div>
    </div>
}