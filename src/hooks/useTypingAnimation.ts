import React, { useEffect, useMemo, useState } from "react"

/**
 * Hook to animate a string of text like a typewriter (terminal)
 * @param text - The text to animate
 * @param delay - The delay between each character
 * @param resetAfter - The delay after the animation is finished to reset the animation
 * @returns {object} - An object containing the animatedText string, a function to reset the animation, a function to stop the animation, and if the animation is typing at the moment
 * @example
 * const animatedText = useTypingAnimation(`Hello World!`)
 * <p>{animatedText}</p>
 */
export const useTypingAnimation = ({
    text,
    delay = 150,
    resetAfter = 1000,
}: {
    text: string
    delay?: number
    resetAfter?: number
}): {
    animatedText: string
    resetAnimation: () => void
    stopAnimation: () => void
    isTyping: boolean
} => {
    const [animatedText, setAnimatedText] = useState(``)
    const [isTyping, setIsTyping] = useState(true)
    const timeouts: NodeJS.Timeout[] = useMemo(() => [], [])

    const resetAnimation = (): void => {
        setIsTyping(true)
        setAnimatedText(``)
    }

    const stopAnimation = (): void => {
        setIsTyping(false)
        timeouts.forEach((timeout) => clearTimeout(timeout))
    }

    useEffect(() => {
        if (isTyping) {
            const timeout = setTimeout(() => {
                setAnimatedText(text.slice(0, animatedText.length + 1))
            }, delay)
            timeouts.push(timeout)
        }
    }, [animatedText, delay, isTyping, text, timeouts])

    useEffect(() => {
        if (animatedText === text) {
            setIsTyping(false)
            const timeout = setTimeout(() => {
                resetAnimation()
            }, resetAfter)
            timeouts.push(timeout)
        }
    }, [animatedText, resetAfter, text, timeouts])

    return { animatedText, resetAnimation, stopAnimation, isTyping }
}
