'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface TypewriterTextProps {
    /** Danh sách chuỗi sẽ lần lượt gõ và xóa (loop) */
    words: string[]
    /** Tốc độ gõ (ms giữa mỗi ký tự) */
    typingSpeed?: number
    /** Tốc độ xóa (ms giữa mỗi ký tự) */
    deletingSpeed?: number
    /** Thời gian dừng khi gõ xong một từ (ms) trước khi xóa */
    pauseDuration?: number
}

export default function TypewriterText({
    words,
    typingSpeed = 150,
    deletingSpeed = 50,
    pauseDuration = 1500,
}: TypewriterTextProps) {
    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [speed, setSpeed] = useState(typingSpeed)

    useEffect(() => {
        if (words.length === 0) return

        const handleTyping = () => {
            const i = loopNum % words.length
            const fullText = words[i]

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            )

            setSpeed(isDeleting ? deletingSpeed : typingSpeed)

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), pauseDuration)
            } else if (isDeleting && text === '') {
                setIsDeleting(false)
                setLoopNum(loopNum + 1)
            }
        }

        const timer = setTimeout(handleTyping, speed)
        return () => clearTimeout(timer)
    }, [text, isDeleting, loopNum, speed, words, typingSpeed, deletingSpeed, pauseDuration])

    return (
        <span className="inline-flex items-center">
            {text}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1 inline-block w-3 h-1 md:w-5 md:h-[6px] bg-foreground"
            />
        </span>
    )
}
