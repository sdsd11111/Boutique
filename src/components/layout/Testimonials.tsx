"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Star, Quote, ExternalLink, MapPin, MessageSquare } from 'lucide-react';

const Testimonials = () => {
    const [count, setCount] = useState(0);
    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" as any }
    };

    // Counter animation for 5.0
    useEffect(() => {
        const controls = animate(0, 5, {
            duration: 2,
            onUpdate: (value) => setCount(value),
            ease: "easeOut",
            delay: 0.5
        });
        return () => controls.stop();
    }, []);

    const reviews = [
        {
            name: "María José Valarezo",
            source: "Google Maps",
            rating: 5,
            text: "El mejor gabinete de belleza en Loja. El tratamiento facial me dejó la piel radiante y la atención es sumamente profesional. ¡Muy recomendados!",
            avatar: "MV",
            type: "google"
        },
        {
            name: "Camila Espinosa",
            source: "Cliente en Local",
            rating: 5,
            text: "Un refugio de paz. El masaje relajante fue justo lo que necesitaba para desconectar del estrés. El ambiente en Lumina es simplemente mágico.",
            avatar: "CE",
            type: "local"
        },
        {
            name: "Andrea Robles",
            source: "Tratamiento Capilar",
            rating: 5,
            text: "Buscaba recuperar mi cabello y en Lumina lo lograron con productos de excelente calidad. Los mejores en Celica y 18 de Nov. ¡Atención divina!",
            avatar: "AR",
            type: "local"
        }
    ];

    return (
        <section id="testimonios" className="py-24 bg-background relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                {/* Header: Google Authority with Dynamic Animation */}
                <motion.div
                    {...fadeIn}
                    className="flex flex-col items-center text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 bg-rose/5 border border-rose/10 px-4 py-2 rounded-full mb-6">
                        <MapPin size={16} className="text-rose" />
                        <span className="text-foreground/60 text-xs font-sans font-bold uppercase tracking-widest">Loja, Ecuador</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-8">
                        Opiniones de quienes ya <span className="text-rose italic">resaltan su luz</span>
                    </h2>

                    <div className="flex flex-col items-center gap-4 bg-white/40 backdrop-blur-sm p-10 rounded-[3rem] border border-rose/5 shadow-2xl relative overflow-hidden group">
                        {/* Animated background glow */}
                        <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                        <div className="flex gap-2 mb-2 relative z-10">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0, rotate: -20 }}
                                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.2 + (i * 0.15),
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20
                                    }}
                                >
                                    <Star size={32} fill="#D4AF37" className="text-gold filter drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1 }}
                            className="text-foreground font-sans text-2xl md:text-4xl font-bold relative z-10"
                        >
                            Calificación <span className="text-rose tabular-nums">{count.toFixed(1)}</span> en Google Maps
                        </motion.p>

                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.2, duration: 1, ease: "easeOut" as any }}
                            className="h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent w-full mb-2"
                        />

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.5 }}
                            className="text-foreground/40 text-sm tracking-wide relative z-10"
                        >
                            Excelencia profesional y calidez en cada servicio
                        </motion.p>
                    </div>
                </motion.div>

                {/* Testimonials Grid (Slider on Mobile) */}
                <div className="flex md:grid md:grid-cols-3 gap-8 mb-20 overflow-x-auto pb-8 md:pb-0 snap-x hide-scrollbar">
                    {reviews.map((rev, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="min-w-[300px] md:min-w-0 p-8 rounded-[2.5rem] bg-white border border-rose/10 relative group hover:border-gold/30 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] transition-all snap-center shadow-sm"
                        >
                            <Quote size={40} className="text-rose/20 absolute top-8 right-8" />

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-rose/10 border border-rose/20 flex items-center justify-center text-rose font-bold">
                                    {rev.avatar}
                                </div>
                                <div>
                                    <h4 className="text-foreground font-bold font-sans">{rev.name}</h4>
                                    <p className="text-foreground/40 text-xs uppercase tracking-tighter">{rev.source}</p>
                                </div>
                            </div>

                            <p className="text-foreground/70 font-sans leading-relaxed text-sm mb-6 italic">
                                "{rev.text}"
                            </p>

                            <div className="flex gap-1">
                                {[...Array(rev.rating)].map((_, j) => (
                                    <Star key={j} size={14} fill="#D4AF37" className="text-gold" />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Final CTA: Leave Review */}
                <motion.div
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: 0.2 }}
                    className="flex flex-col items-center gap-6"
                >
                    <a
                        href="https://wa.me/593996264362"
                        target="_blank"
                        className="group flex items-center gap-3 bg-white hover:bg-gold text-foreground hover:text-white border border-rose/10 hover:border-gold px-10 py-5 rounded-2xl font-sans font-bold transition-all shadow-xl"
                    >
                        <MessageSquare size={20} />
                        <span>Sé parte de nuestra historia - Déjanos tu opinión</span>
                        <ExternalLink size={18} className="translate-x-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
