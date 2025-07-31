import Image from 'next/image'


export default function About() {
    return <div>
        <h1 className='text-lg pb-4'>Tech Stack</h1>
        <h4 className='text-lg pb-2'>Front End:</h4>
        <div className="flex gap-2 pb-6">
            <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript logo"  />
            <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="typescript logo"   />
            
            <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react logo"   />
            
            <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="nextjs logo"   />
            
            <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="flutter logo"   />
            
            <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="redux logo"   />
            
            <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="sass logo"   />
            
            <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="tailwindcss logo"   />
            
            <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="bootstrap logo"   />
            
            <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html5 logo"   />
            
            <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" alt="jquery logo"   />
        </div>

        
        <h4 className='text-lg pb-2'>Back End/Database:</h4>
        <div className="flex gap-2 pb-6">
            <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="firebase logo"   />
            
            <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="java logo"   />
            
            <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="python logo"   />
            
            <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="php logo"   />
            <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="mysql logo"   />
        </div>

        
        <h4 className='text-lg pb-2'>Tools:</h4>
        <div className="flex gap-2 pb-6">
            <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"   alt="git logo"  />
            
            <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"  alt="gitlab logo"  />
            
            <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"  alt="figma logo"  />
            
            <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"  alt="jira logo"  />
            
            <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"  alt="github logo"  />
        </div>

        
        <h4 className='text-lg pb-2'>Testing:</h4>
        <div className="flex gap-2">
            <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"  alt="jest logo"  />
        </div>
    </div>
}