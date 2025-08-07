"use client"

import dynamic from "next/dynamic"
import { FormEvent, useEffect, useState } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
const GlassSurface = dynamic(() => import("@/components/GlassSurface"), { ssr: false });

type Status = "idle" | "sending" | "success" | "error"

export default function Contact() {
    const [status, setStatus] = useState<Status>("idle")
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    })

    useEffect(() => {
        if(status === "success") {
            const timer = setTimeout(() => {
                setStatus("idle")
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [status])

    const handleInput = (field: keyof typeof form, value: string, ) => {
        setForm(prev => ({...prev, [field]: value}))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus("sending")
        try {
            const res = await fetch("/api/sendEmail", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(form)
            })

            if(res.ok) {
                setStatus("success")
            } else setStatus("error")
            
        }
        catch(e) {
            console.log(e)
            setStatus("error")
        }
    }
    
    return <div>
        <p className="">My socials:</p>
        <div className="flex gap-2 text-4xl pb-8">
            <a target="_blank" href="https://github.com/shaan98kho/herobite" rel="noopener noreferrer"
            ><FaGithub/></a>
            <a target="_blank" href="https://www.linkedin.com/in/wen-qi-k-966581138/" rel="noopener noreferrer"><FaLinkedin/></a>
        </div>
        <p>Alternatively you could also send me a message here:</p>
        <form 
            method="POST" 
            className="form flex flex-col gap-4 pt-2"
            onSubmit={handleSubmit}
        >
            <input 
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={e => handleInput("name", e.target.value)}
                required
             />
            <input 
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={e => handleInput("email", e.target.value)}
                required
             />
            <textarea 
                name="message"
                rows={5}
                placeholder="How can I help you?"
                className="resize-none"
                value={form.message}
                onChange={e => handleInput("message", e.target.value)}
                required
             />
             
            <button type="submit" disabled={status === "sending"} className={`mx-auto ${status==="idle" ? "cursor-pointer" : ""}`}>
                <GlassSurface
                    width={'fit-content'}
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
                    className='px-5 py-1'
                >
                    {status === "sending" ? "Sending…" : "Send"}
                </GlassSurface>
            </button>
            {status === "success" && (
                <span className="text-center">Thanks! I’ll be in touch soon.</span>
            )}
            {status === "error" && (
                <span className="text-center">Oops—something went wrong. Please try again.</span>
            )}
        </form>
    </div>
}