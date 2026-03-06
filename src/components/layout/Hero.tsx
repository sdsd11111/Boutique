"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Heart, ChevronDown, ChevronUp } from 'lucide-react';

const Hero = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="relative h-screen flex items-center pt-20 overflow-hidden bg-background">
            {/* Background radial gradient for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,114,140,0.12)_0%,transparent_70%)]" />

            {/* Mobile Background Image */}
            <div className="md:hidden absolute inset-0 z-0">
                <Image
                    src="/images/Hero.webp"
                    alt="Lumina Beauty & Wellness - Renueva tu Belleza en Loja"
                    fill
                    className="object-cover opacity-30"
                    priority
                    unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Column: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start"
                >
                    {/* Animated Brand Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-rose/10 border border-rose/20 px-4 py-2 rounded-full mb-8"
                    >
                        <Heart size={16} className="text-rose animate-pulse" />
                        <span className="text-rose text-xs font-sans tracking-widest uppercase font-bold">
                            Lumina Loja
                        </span>
                    </motion.div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-foreground leading-tight mb-8">
                        Renueva tu <span className="text-rose italic">Belleza Natural</span>, Resalta tu Luz.
                    </h1>

                    <div className="relative mb-10 w-full max-w-lg">
                        {/* Desktop: Full text with toggle */}
                        <div className="hidden md:block">
                            <p className={`text-lg md:text-xl text-foreground/70 font-sans leading-relaxed ${isExpanded ? '' : 'line-clamp-2'}`}>
                                Vive una experiencia premium de cuidado personal y bienestar. Especialistas en estilismo, tratamientos faciales y armonía estética en el corazón de Loja.
                            </p>
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="flex items-center gap-2 text-rose text-sm font-bold mt-2 hover:text-gold transition-colors uppercase tracking-widest"
                            >
                                {isExpanded ? (
                                    <>Ocultar <ChevronUp size={16} /></>
                                ) : (
                                    <>Descubre más <ChevronDown size={16} /></>
                                )}
                            </button>
                        </div>

                        {/* Mobile: Simple text, no toggle */}
                        <div className="md:hidden">
                            <p className="text-lg text-foreground/70 font-sans leading-relaxed">
                                Experiencia premium de cuidado personal y bienestar en el corazón de Loja.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                        <Link
                            href="#servicios"
                            className="bg-rose text-white px-8 py-4 rounded-full font-sans font-bold text-lg hover:bg-gold transition-all shadow-xl shadow-rose/20 flex items-center justify-center gap-2 group"
                        >
                            Ver Nuestros Servicios
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>

                {/* Right Column: Visual (Desktop Only) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative h-[500px] md:h-[700px] w-full hidden md:block"
                >
                    {/* Decorative elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-rose/8 blur-[120px] rounded-full pointer-events-none" />

                    <div className="relative h-full w-full rounded-2xl overflow-hidden border border-rose/10 shadow-2xl">
                        {/* Desktop Hero Image */}
                        <Image
                            src="/images/Hero.webp"
                            alt="Lumina Beauty & Wellness - Experiencia de Bienestar en Loja"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            priority
                            unoptimized
                        />
                        {/* Subtle overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-rose/20 to-transparent opacity-40" />
                    </div>

                    {/* Floating detail badge */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-6 -left-6 bg-blush border border-rose/20 p-6 rounded-2xl shadow-2xl"
                    >
                        <p className="text-rose font-serif text-2xl mb-1">Armonía & Estilo</p>
                        <p className="text-foreground/50 text-sm font-sans uppercase tracking-tighter">Reserva tu Sesión</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
