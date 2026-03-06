"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Heart, MapPin, ExternalLink } from 'lucide-react';

const AboutUs = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" as any }
    };

    const values = [
        {
            icon: <ShieldCheck className="text-rose" size={32} />,
            title: "Sofisticación",
            desc: "Tratamientos que siguen tendencias internacionales, elevando tu belleza natural con elegancia."
        },
        {
            icon: <Heart className="text-rose" size={32} />,
            title: "Cuidado Orgánico",
            desc: "Utilizamos productos de alta gama que respetan tu piel y realzan tu brillo interior."
        },
        {
            icon: <MapPin className="text-rose" size={32} />,
            title: "Refugio Urbano",
            desc: "Un espacio diseñado para tu desconexión total en el centro de Loja."
        }
    ];

    return (
        <section id="nosotros" className="pt-24 pb-12 bg-background overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Asymmetric Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">

                    {/* Visual Element (warm lighting) */}
                    <motion.div
                        {...fadeIn}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-rose/10 shadow-[0_0_50px_rgba(232,160,191,0.1)]">
                            <Image
                                src="/images/about-essencia-1.webp"
                                alt="Gabinete de Belleza Lumina en el centro de Loja"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-rose/20 via-transparent to-transparent" />

                            {/* Location Badge Overlay */}
                            <div className="absolute bottom-8 left-8 p-4 bg-white/60 backdrop-blur-md border border-rose/10 rounded-2xl">
                                <div className="flex items-center gap-3">
                                    <MapPin className="text-rose" size={20} />
                                    <div>
                                        <p className="text-foreground text-xs font-bold uppercase tracking-widest">Encuéntranos</p>
                                        <p className="text-foreground/60 text-[10px]">Celica y 18 de Noviembre, Loja</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Gold Leaf */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-rose/30 rounded-tr-3xl -z-10" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-rose/30 rounded-bl-3xl -z-10" />
                    </motion.div>

                    {/* Story Block */}
                    <motion.div
                        {...fadeIn}
                        className="lg:col-span-7 flex flex-col gap-8"
                    >
                        <div className="space-y-4">
                            <span className="text-rose text-sm font-sans tracking-[0.3em] uppercase font-bold">Nuestra Esencia</span>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight">
                                Más que un gabinete, tu refugio de <span className="text-rose italic">bienestar y luz</span>.
                            </h2>
                        </div>

                        <div className="space-y-6 text-foreground/70 font-sans text-lg leading-relaxed">
                            <p>
                                Ubicados en la intersección de <span className="text-foreground font-bold">Celica y 18 de Noviembre</span>, Lumina nace para redefinir la belleza en Loja. Nos diferenciamos por una atención personalizada que fusiona técnicas avanzadas con un ambiente de paz, enfocándonos en resultados que resaltan tu esencia única.
                            </p>
                        </div>

                        {/* Values Cards */}
                        <div className="flex md:grid md:grid-cols-3 gap-6 pt-6 overflow-x-auto pb-4 md:pb-0 snap-x hide-scrollbar">
                            {values.map((v, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2, duration: 0.5 }}
                                    className="min-w-[280px] md:min-w-0 p-6 rounded-2xl bg-blush border border-rose/10 hover:border-rose/30 transition-all group snap-center shadow-sm"
                                >
                                    <div className="mb-4 transform group-hover:scale-110 transition-transform">{v.icon}</div>
                                    <h4 className="text-foreground font-serif font-bold text-lg mb-2">{v.title}</h4>
                                    <p className="text-foreground/50 text-xs leading-relaxed">{v.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default AboutUs;
