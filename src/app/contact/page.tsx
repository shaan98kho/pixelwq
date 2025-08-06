"use client"

import { useState } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import ClickSpark from "@/components/ClickSpark"

export default function Contact() {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    const colours = ["#7cff67", "#b19eef", "#5227ff"]

    const generateColour = () => {
        const randomIndex = Math.floor(Math.random() * colours.length);
        console.log(randomIndex)
        return colours[randomIndex];
    }


    return <div>
        {/* <p className="">Get in touch with me at: </p> */}
        <div className="flex gap-2 text-4xl pb-4">
            <a target="_blank" href="https://github.com/shaan98kho/herobite" rel="noopener noreferrer"
            ><FaGithub/></a>
            <a target="_blank" href="https://www.linkedin.com/in/wen-qi-k-966581138/" rel="noopener noreferrer"><FaLinkedin/></a>
        </div>
        <p>Or send me a message</p>
        <ClickSpark
        sparkColor="rgba(255,255,255,0.6)"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
        >
            
            <form method="POST" className="form flex flex-col gap-4 pt-4">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="you@example.com" required />
                <textarea name="message" rows={5} placeholder="How can I help you?" className="resize-none" required />
                <button>Send</button>
            </form>
        </ClickSpark>
        

    </div>
}