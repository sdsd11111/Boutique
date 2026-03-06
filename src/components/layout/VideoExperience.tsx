"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play, Sparkles, Droplets, Heart } from 'lucide-react';

const VideoExperience = () => {

    const features = [
        { icon: <Sparkles size={14} />, label: "Cuidado Premium", color: "text-rose" },
        { icon: <Droplets size={14} />, label: "Productos Orgánicos", color: "text-rose" },
        { icon: <Heart size={14} />, label: "Relajación Total", color: "text-rose" }
    ];

    return (
        <section
            id="experiencia"
            className="relative pt-12 pb-24 bg-background overflow-hidden"
        >
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
                            Experiencia que <br /> <span className="text-rose italic">renueva tu esencia</span>
                        </h2>

                        <p className="text-base md:text-xl text-foreground/70 font-sans max-w-2xl mx-auto leading-relaxed">
                            Descubre el verdadero significado del bienestar. Nuestro enfoque personalizado garantiza resultados que no solo mejoran tu apariencia, sino que nutren tu tranquilidad interior.
                        </p>
                    </motion.div>
                </div>

                <div className="w-full relative aspect-[4/5] md:aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-rose/10 shadow-xl group">
                    {/* Static Image Poster */}
                    <div className="absolute inset-0 w-full h-full">
                        <Image
                            src="/images/about-essencia-1.webp"
                            alt="Experiencia Lumina Beauty Loja"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                            unoptimized
                        />
                        {/* Subtle Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-blush via-blush/20 to-transparent opacity-80" />
                    </div>

                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex flex-col items-center gap-4 bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-rose/20">
                            <span className="text-rose font-sans font-bold text-lg md:text-xl tracking-widest text-center">
                                VIDEO <br /> PRÓXIMAMENTE
                            </span>
                        </div>
                    </div>

                    {/* Features Badge Group */}
                    <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 w-full flex flex-wrap justify-center gap-2 md:gap-4 px-4 md:px-6">
                        {features.map((feat, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-1.5 md:gap-2 bg-white/80 backdrop-blur-md border border-rose/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-sm"
                            >
                                <span className={feat.color}>{feat.icon}</span>
                                <span className="text-foreground/80 text-[10px] md:text-xs font-sans font-bold uppercase">{feat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoExperience;

