'use client';
import { MOCK_SERVICES } from '@/lib/mock-data';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ServiceCards() {
    return (
        <section className="relative py-20 md:py-32 bg-background" id="services">
            <div className="container-custom">
                <div className="mb-20">
                    <h2 className="text-[12vw] lg:text-[7vw] font-bold leading-[0.9] tracking-tighter text-foreground mb-6">
                        Expertise
                    </h2>
                </div>

                <div className="relative space-y-24 md:space-y-32">
                    {MOCK_SERVICES.map((service, index) => (
                        <div
                            key={service.id}
                            className="sticky top-24 md:top-32 w-full"
                            style={{
                                zIndex: index + 1,
                                top: `calc(10vh + ${index * 60}px)`
                            }}
                        >
                            <div className="relative w-full overflow-hidden bg-card rounded-[2rem] border border-muted/10 shadow-2xl p-8 md:p-16 h-[60vh] md:h-[500px] flex flex-col md:flex-row gap-10 items-center justify-between transition-transform duration-500 hover:scale-[1.02]">

                                <div className="relative z-10 max-w-2xl space-y-8">
                                    <h3 className="text-4xl md:text-6xl font-bold tracking-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-xl md:text-2xl text-muted leading-relaxed">
                                        {service.description}
                                    </p>
                                    <div className="pt-4">
                                        <button className="px-8 py-3 rounded-full border border-foreground/10 hover:bg-foreground hover:text-background transition-colors font-bold uppercase text-sm tracking-wide">
                                            Learn More
                                        </button>
                                    </div>
                                </div>

                                {/* Placeholder for visual/image */}
                                <div className="relative w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
