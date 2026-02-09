'use client'

import { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation'

interface TransitionContextType {
    isTransitioning: boolean
    progress: number
    navigate: (href: string) => void
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined)

export function TransitionProvider({ children }: { children: React.ReactNode }) {
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [progress, setProgress] = useState(0)
    const pathname = usePathname()
    const router = useRouter()
    const [targetPath, setTargetPath] = useState<string | null>(null)
    
    // Use ref to track actual progress value (avoid stale closures)
    const currentProgressRef = useRef(0)
    const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)
    const fallbackTimerRef = useRef<NodeJS.Timeout | null>(null)
    const imageCheckTimerRef = useRef<NodeJS.Timeout | null>(null)

    // Clear all timers helper
    const clearAllTimers = useCallback(() => {
        if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current)
            progressIntervalRef.current = null
        }
        if (fallbackTimerRef.current) {
            clearTimeout(fallbackTimerRef.current)
            fallbackTimerRef.current = null
        }
        if (imageCheckTimerRef.current) {
            clearTimeout(imageCheckTimerRef.current)
            imageCheckTimerRef.current = null
        }
    }, [])

    // Complete transition and hide overlay
    const completeTransition = useCallback(() => {
        console.log('[Transition] Completing...')
        clearAllTimers()

        // Animate from current to 100%
        const startProgress = currentProgressRef.current
        const finalInterval = setInterval(() => {
            currentProgressRef.current += 5
            if (currentProgressRef.current >= 100) {
                currentProgressRef.current = 100
                clearInterval(finalInterval)
                setProgress(100)
                
                console.log('[Transition] Reached 100%, hiding overlay in 800ms')
                
                // Hide after curtain animation
                setTimeout(() => {
                    console.log('[Transition] Hiding overlay')
                    setIsTransitioning(false)
                    setProgress(0)
                    currentProgressRef.current = 0
                    setTargetPath(null)
                }, 800)
            } else {
                setProgress(currentProgressRef.current)
            }
        }, 30)
    }, [clearAllTimers])

    // Navigate function
    const navigate = useCallback((href: string) => {
        console.log('[Transition] Navigate called:', href)
        
        // Clear any existing timers
        clearAllTimers()
        
        // Reset state
        setTargetPath(href)
        setIsTransitioning(true)
        setProgress(0)
        currentProgressRef.current = 0

        // Animate progress 0 → 70%
        progressIntervalRef.current = setInterval(() => {
            if (currentProgressRef.current < 70) {
                currentProgressRef.current += Math.random() * 3 + 2
                if (currentProgressRef.current > 70) {
                    currentProgressRef.current = 70
                }
                setProgress(Math.floor(currentProgressRef.current))
                console.log('[Transition] Progress:', Math.floor(currentProgressRef.current))
            } else {
                // Stay at 70% until images load
                if (progressIntervalRef.current) {
                    clearInterval(progressIntervalRef.current)
                    progressIntervalRef.current = null
                }
            }
        }, 80)

        // Actually navigate
        setTimeout(() => {
            console.log('[Transition] Executing router.push:', href)
            router.push(href)
        }, 100)

        // Fallback: force complete after 3 seconds
        fallbackTimerRef.current = setTimeout(() => {
            console.log('[Transition] Fallback timeout! Force completing...')
            completeTransition()
        }, 3000)

    }, [router, clearAllTimers, completeTransition])

    // Detect when pathname changes (navigation complete)
    useEffect(() => {
        if (targetPath && pathname === targetPath) {
            console.log('[Transition] Navigation complete! Pathname:', pathname)
            
            // Clear the initial progress interval
            if (progressIntervalRef.current) {
                clearInterval(progressIntervalRef.current)
                progressIntervalRef.current = null
            }

            // Check for images after a small delay
            imageCheckTimerRef.current = setTimeout(() => {
                const images = Array.from(document.images)
                const totalImages = images.length
                let loadedImages = 0

                console.log('[Transition] Found', totalImages, 'images')

                if (totalImages === 0) {
                    console.log('[Transition] No images, completing immediately')
                    completeTransition()
                    return
                }

                const onImageLoad = () => {
                    loadedImages++
                    
                    // Update progress 70% → 90% based on images loaded
                    const imageProgress = 70 + (loadedImages / totalImages) * 20
                    currentProgressRef.current = imageProgress
                    setProgress(Math.floor(imageProgress))
                    
                    console.log('[Transition] Image loaded:', loadedImages, '/', totalImages, '→', Math.floor(imageProgress) + '%')

                    if (loadedImages >= totalImages) {
                        console.log('[Transition] All images loaded!')
                        completeTransition()
                    }
                }

                images.forEach((img) => {
                    if (img.complete) {
                        onImageLoad()
                    } else {
                        img.addEventListener('load', onImageLoad, { once: true })
                        img.addEventListener('error', onImageLoad, { once: true })
                    }
                })
            }, 200)
        }
    }, [pathname, targetPath, completeTransition])

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            clearAllTimers()
        }
    }, [clearAllTimers])

    return (
        <TransitionContext.Provider value={{ isTransitioning, progress, navigate }}>
            {children}
        </TransitionContext.Provider>
    )
}

export function useTransition() {
    const context = useContext(TransitionContext)
    if (!context) {
        throw new Error('useTransition must be used within TransitionProvider')
    }
    return context
}
