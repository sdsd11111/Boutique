"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, HelpCircle, MapPin } from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
    return (
        <div className="border-b border-rose/10 last:border-0 overflow-hidden">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between py-6 px-4 md:px-8 text-left hover:bg-rose/5 transition-colors group"
            >
                <span className={`text-lg md:text-xl font-sans font-bold transition-colors ${isOpen ? 'text-rose' : 'text-foreground/80 group-hover:text-foreground'}`}>
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0, color: isOpen ? '#D4AF37' : '#2D2727' }}
                    className="flex-shrink-0 ml-4"
                >
                    <Plus size={28} />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="px-4 md:px-8 pb-8 text-foreground/70 font-sans leading-relaxed text-base md:text-lg bg-rose/5">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const questions = [
        {
            question: "¿Por qué elegir Lumina Beauty & Wellness?",
            answer: (
                <p>
                    En <strong>Lumina</strong>, estamos ubicados en Celica y 18 de Noviembre. Ofrecemos una experiencia premium personalizada, usando productos de alta gama y técnicas avanzadas para resaltar tu belleza natural.
                </p>
            )
        },
        {
            question: "¿Es necesario agendar una cita previa?",
            answer: (
                <p>
                    Para garantizarte una atención exclusiva y sin esperas, recomendamos <strong>agendar tu cita</strong> vía WhatsApp o llamándonos directamente. Así podremos dedicarte el tiempo que tu bienestar merece.
                </p>
            )
        },
        {
            question: "¿Qué tipo de productos utilizan en sus tratamientos faciales?",
            answer: (
                <p>
                    Utilizamos exclusivamente <strong>productos orgánicos y dermatológicamente testeados</strong> de marcas líderes, asegurando resultados visibles mientras cuidamos la salud de tu piel.
                </p>
            )
        },
        {
            question: "¿Cuentan con promociones para clientes frecuentes?",
            answer: (
                <p>
                    ¡Sí! En Lumina valoramos tu lealtad. Pregunta por nuestro <strong>programa de bienestar</strong> y paquetes especiales para servicios combinados de estilismo y spa.
                </p>
            )
        },
        {
            question: "¿Dónde están ubicados exactamente en Loja?",
            answer: (
                <p>
                    Nos encontramos estratégicamente en la intersección de las calles <strong>Celica y 18 de Noviembre</strong>, un lugar de fácil acceso con un ambiente diseñado para tu tranquilidad.
                </p>
            )
        }
    ];

    return (
        <section id="faq" className="py-24 bg-background relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 text-rose bg-rose/10 px-4 py-2 rounded-full mb-4"
                    >
                        <HelpCircle size={18} />
                        <span className="text-xs font-bold uppercase tracking-[0.2em]">Asesoría de Bienestar</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                        Preguntas <span className="text-rose italic">Frecuentes</span>
                    </h2>
                    <p className="text-foreground/40 font-sans max-w-2xl mx-auto">
                        Resolvemos tus dudas sobre nuestros servicios y filosofía de cuidado personal.
                    </p>
                </div>

                <div className="bg-white/30 rounded-[2.5rem] border border-rose/10 overflow-hidden backdrop-blur-sm shadow-sm">
                    {questions.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>

                {/* Local SEO Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-3 p-4 bg-white/5 border border-rose/5 rounded-2xl group hover:border-gold/30 transition-all cursor-default shadow-sm">
                        <MapPin size={20} className="text-rose" />
                        <p className="text-foreground/60 font-sans text-sm md:text-base">
                            ¿Tienes más consultas? <span className="text-foreground font-bold">Visítanos en la Celica y 18 de Noviembre</span> para una asesoría de belleza personalizada.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
