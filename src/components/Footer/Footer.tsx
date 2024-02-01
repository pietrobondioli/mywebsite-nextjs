import React from "react"
import { AiOutlineMail } from "react-icons/ai"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export const Footer: React.FC = () => {
    return (
        <footer className="w-full h-40 flex flex-col items-center justify-evenly">
            <p className="flex text-center text-base lg:text-lg flex-col lg:flex-row gap-4">
                Pietro Bondioli <span className="hidden lg:block">-</span>
                <a
                    className="text-primary hover:text-primary-light duration-300"
                    href="https://opensource.org/licenses/MIT"
                    target="_blank"
                    rel="noreferrer"
                >
                    Copyright (c) 2021 MIT
                </a>
            </p>
            <div className="flex gap-6">
                <a href="https://github.com/pietrobondioli" target="_blank" rel="noreferrer" className="group">
                    <FaGithub className="m-4 w-6 h-6 duration-300 group-hover:animate-bounce group-hover:text-primary" />
                </a>
                <a
                    href="https://www.linkedin.com/in/pietrobondioli/"
                    target="_blank"
                    rel="noreferrer"
                    className="group"
                >
                    <FaLinkedin className="m-4 w-6 h-6 duration-300 group-hover:animate-bounce group-hover:text-primary" />
                </a>
                <a href="mailto:dev@pietrobondioli.com.br" className="group">
                    <AiOutlineMail className="m-4 w-6 h-6 duration-300 group-hover:animate-bounce group-hover:text-primary" />
                </a>
            </div>
        </footer>
    )
}
