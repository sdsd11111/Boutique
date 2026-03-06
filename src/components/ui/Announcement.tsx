"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lightbulb, FileDown } from 'lucide-react';

interface Announcement {
    id: number;
    title: string;
    offer: string;
    description: string;
    image_filename: string | null;
    pdf_filename: string | null;
    active: boolean;
}

const Announcement = () => {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFloatingVisible, setIsFloatingVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        fetchAnnouncements();
    }, []);

    const fetchAnnouncements = async () => {
        try {
            const res = await fetch('/api/announcements');
            const data = await res.json();
            if (data.success && data.data.length > 0) {
                setAnnouncements(data.data);
                // Iniciar con el modal
                setTimeout(() => setIsModalVisible(true), 1000);
            }
        } catch (error) {
            console.error('Error fetching announcements:', error);
        }
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
        // Mostrar la burbuja flotante después de cerrar el modal
        setTimeout(() => setIsFloatingVisible(true), 500);
    };

    const handleNext = () => {
        if (currentIndex < announcements.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setIsFloatingVisible(false);
        }
    };

    if (announcements.length === 0) return null;

    const currentAnnouncement = announcements[currentIndex];

    return (
        <>
            <AnimatePresence>
                {/* MODAL VERSION (Splash on Load) */}
                {isModalVisible && currentAnnouncement && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleCloseModal}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-lg bg-white border border-rose/40 rounded-[2.5rem] p-0 shadow-[0_0_50px_rgba(212,114,140,0.15)] overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-rose/10 blur-[100px] pointer-events-none" />

                            <button
                                onClick={handleCloseModal}
                                className="absolute top-6 right-6 text-foreground/30 hover:text-rose transition-colors z-30 w-10 h-10 flex items-center justify-center bg-white/40 backdrop-blur-md rounded-full shadow-sm"
                            >
                                <X size={24} />
                            </button>

                            <div className="relative z-10 flex flex-col">
                                <div className="relative">
                                    {currentAnnouncement.image_filename ? (
                                        <div className="w-full aspect-[16/10] md:aspect-video overflow-hidden">
                                            <img
                                                src={`/api/media/${currentAnnouncement.image_filename}`}
                                                alt={currentAnnouncement.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                                        </div>
                                    ) : (
                                        <div className="pt-12 px-8 flex justify-center">
                                            <div className="w-20 h-20 rounded-3xl bg-rose/10 border border-rose/20 flex items-center justify-center text-rose shadow-xl shadow-rose/5">
                                                <Lightbulb size={40} />
                                            </div>
                                        </div>
                                    )}

                                    {/* Overlaid Badge */}
                                    {currentAnnouncement.offer && (
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
                                            <span className="bg-rose text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(212,114,140,0.4)] border border-white/20 whitespace-nowrap">
                                                {currentAnnouncement.offer}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className={`p-8 md:p-10 text-center ${currentAnnouncement.image_filename ? 'pt-14' : ''}`}>
                                    {!currentAnnouncement.image_filename && currentAnnouncement.offer && (
                                        <span className="inline-block bg-rose text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6">
                                            {currentAnnouncement.offer}
                                        </span>
                                    )}

                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 leading-tight">
                                        {currentAnnouncement.title}
                                    </h2>

                                    <p className="text-foreground/60 text-lg font-sans leading-relaxed mb-8 mx-auto max-w-sm">
                                        {currentAnnouncement.description}
                                    </p>

                                    <div className="flex flex-col gap-4 w-full">
                                        {currentIndex === 0 ? (
                                            <a
                                                href={`/api/media/cesar-reyes-jaramillo-eu0t.vcf`}
                                                download="Lumina_Contacto.vcf"
                                                className="w-full flex items-center justify-center gap-3 bg-rose hover:bg-rose/90 text-white py-4 md:py-5 rounded-2xl font-sans font-bold text-lg transition-all shadow-xl shadow-rose/30 hover:scale-[1.02] active:scale-[0.98]"
                                            >
                                                <FileDown size={24} />
                                                <span>Guardar Contacto (VCF)</span>
                                            </a>
                                        ) : currentAnnouncement.pdf_filename && (
                                            <a
                                                href={`/api/media/${currentAnnouncement.pdf_filename}`}
                                                download
                                                className="w-full flex items-center justify-center gap-3 bg-rose hover:bg-rose/90 text-white py-4 md:py-5 rounded-2xl font-sans font-bold text-lg transition-all shadow-xl shadow-rose/30 hover:scale-[1.02] active:scale-[0.98]"
                                            >
                                                <FileDown size={24} />
                                                <span>Descargar Catálogo PDF</span>
                                            </a>
                                        )}
                                        <button
                                            onClick={handleCloseModal}
                                            className="w-full py-4 text-foreground/40 hover:text-rose transition-colors text-sm font-bold uppercase tracking-widest"
                                        >
                                            Continuar Explorando
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {/* FLOATING VERSION (Compact) */}
                {isFloatingVisible && currentAnnouncement && (
                    <motion.div
                        initial={{ opacity: 0, x: -50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -50, scale: 0.9 }}
                        className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-[60] w-[200px] md:w-[320px] max-w-[calc(100vw-48px)]"
                    >
                        <div className="bg-white/95 border border-rose/30 rounded-2xl md:rounded-3xl shadow-2xl shadow-rose/10 backdrop-blur-xl relative overflow-hidden group">
                            {/* Image Header for Floating Version */}
                            {currentAnnouncement.image_filename && (
                                <div className="w-full h-20 md:h-32 overflow-hidden relative">
                                    <img
                                        src={`/api/media/${currentAnnouncement.image_filename}`}
                                        alt={currentAnnouncement.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 shadow-inner"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-transparent" />
                                </div>
                            )}

                            <button
                                onClick={() => setIsFloatingVisible(false)}
                                className="absolute top-2 right-2 text-foreground/50 hover:text-rose transition-colors z-20 p-1 bg-white/20 backdrop-blur-sm rounded-full shadow-sm"
                            >
                                <X size={14} />
                            </button>

                            <div className={`p-3 md:p-5 relative z-10 flex flex-col gap-2 md:gap-3 ${currentAnnouncement.image_filename ? '-mt-4' : ''}`}>
                                <div className="flex items-center gap-2 md:gap-3">
                                    {!currentAnnouncement.image_filename && (
                                        <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-rose/10 border border-rose/20 flex items-center justify-center text-rose">
                                            <Lightbulb size={14} className="md:hidden" />
                                            <Lightbulb size={20} className="hidden md:block" />
                                        </div>
                                    )}
                                    {currentAnnouncement.offer && (
                                        <span className="bg-rose text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-widest shadow-sm">
                                            {currentAnnouncement.offer}
                                        </span>
                                    )}
                                </div>

                                <div className="space-y-0.5 md:space-y-1">
                                    <h4 className="text-sm md:text-lg font-serif font-bold text-foreground tracking-tight leading-tight">
                                        {currentAnnouncement.title}
                                    </h4>
                                    <p className="text-foreground/60 text-[10px] md:text-xs leading-relaxed line-clamp-1 group-hover:line-clamp-none transition-all duration-300">
                                        {currentAnnouncement.description}
                                    </p>
                                </div>

                                <div className="flex gap-2 pt-1">
                                    {currentIndex === 0 ? (
                                        <a
                                            href={`/api/media/cesar-reyes-jaramillo-eu0t.vcf`}
                                            download="Lumina_Contacto.vcf"
                                            className="flex-1 flex items-center justify-center gap-1 bg-rose hover:bg-rose/90 text-white py-1.5 md:py-2.5 rounded-lg md:rounded-xl font-sans font-bold text-[10px] md:text-xs transition-all shadow-lg shadow-rose/10"
                                        >
                                            <FileDown size={12} className="md:hidden" />
                                            <FileDown size={14} className="hidden md:block" />
                                            <span>Guardar Contacto</span>
                                        </a>
                                    ) : currentAnnouncement.pdf_filename && (
                                        <a
                                            href={`/api/media/${currentAnnouncement.pdf_filename}`}
                                            download
                                            className="flex-1 flex items-center justify-center gap-1 bg-rose hover:bg-rose/90 text-white py-1.5 md:py-2.5 rounded-lg md:rounded-xl font-sans font-bold text-[10px] md:text-xs transition-all shadow-lg shadow-rose/10"
                                        >
                                            <FileDown size={12} className="md:hidden" />
                                            <FileDown size={14} className="hidden md:block" />
                                            <span>Ver Catálogo</span>
                                        </a>
                                    )}
                                    {announcements.length > 1 && (
                                        <button
                                            onClick={handleNext}
                                            className="px-2 py-1.5 md:px-3 md:py-2.5 bg-rose/5 hover:bg-rose/10 border border-rose/10 rounded-lg md:rounded-xl text-foreground/60 hover:text-rose text-[9px] md:text-xs font-bold transition-all"
                                        >
                                            Siguiente
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Announcement;
