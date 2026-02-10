'use client'

import React from 'react'
import Image from 'next/image'

export default function ContactFooter() {
    return (
        <div className="w-full bg-background pb-0 pt-20 md:pt-32">
            <div className="container mx-auto px-6 md:px-12">
                <div className="relative w-full aspect-[16/9] md:aspect-[2.4/1] overflow-hidden rounded-[3rem] md:rounded-t-[5rem]">
                    <Image
                        src="/images/contact/pth-Illustration.png"
                        alt="Contact Illustration"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}
