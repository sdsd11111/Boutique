"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Send, MessageCircle, ShieldCheck, Heart } from 'lucide-react';

const ContactLocation = () => {
    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        projectType: 'Hogar',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value.replace(/\D/g, ''); // Only numbers
        setFormData({ ...formData, whatsapp: val });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', whatsapp: '', projectType: 'Hogar', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="ubicacion" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-rose text-sm font-sans tracking-[0.3em] uppercase font-bold block mb-4">Ubicación & Contacto</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight">
                        Tu refugio de belleza en el <span className="text-rose italic">centro de Loja</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                    {/* Left: Map & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-8"
                    >
                        <div className="bg-white/50 backdrop-blur-md p-8 rounded-[2.5rem] border border-rose/10 flex flex-col gap-6 shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-rose/10 rounded-2xl text-rose">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-foreground font-bold font-sans mb-1 text-lg">Nuestro Gabinete</h4>
                                    <p className="text-foreground/60 text-sm leading-relaxed">
                                        Esquina de las calles <span className="text-foreground font-bold">Celica y 18 de Noviembre</span>,<br />
                                        Loja, Ecuador.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-rose/10 rounded-2xl text-rose">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-foreground font-bold font-sans mb-1 text-lg">Citas & Consultas</h4>
                                    <p className="text-foreground/60 text-sm">WhatsApp: <span className="text-foreground font-bold">+593 99 626 4362</span></p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-rose/10 rounded-2xl text-rose">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="text-foreground font-bold font-sans mb-1 text-lg">Horarios de Atención</h4>
                                    <p className="text-foreground/60 text-sm">Lunes a Sábado: 8:30 AM — 7:00 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Container */}
                        <div className="flex-grow min-h-[350px] rounded-[2.5rem] overflow-hidden border border-rose/10 relative shadow-2xl">
                            {/* Embedded Google Map */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.069966257073!2d-79.2034951!3d-4.0060391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb373c9b254913%3A0x92662d1cf07bd8ef!2sNALUZ!5e0!3m2!1ses-419!2sec!4v1770906379063!5m2!1ses-419!2sec"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(0.5) opacity(0.8)' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full opacity-80"
                            ></iframe>
                            <a
                                href="https://maps.app.goo.gl/LuminaLoja"
                                target="_blank"
                                className="absolute top-4 left-4 bg-white/60 hover:bg-rose hover:text-white backdrop-blur-md px-4 py-2 rounded-full border border-rose/30 text-rose text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2 group/map shadow-md"
                            >
                                <MapPin size={12} className="group-hover/map:animate-bounce" />
                                Ubicación Privilegiada
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white/50 backdrop-blur-md p-10 md:p-12 rounded-[2.5rem] border border-rose/10 h-full flex flex-col gap-6 shadow-sm"
                        >
                            <div className="mb-4 text-center lg:text-left">
                                <h3 className="text-3xl font-serif font-bold text-foreground mb-2 italic">Solicita tu Cita</h3>
                                <p className="text-foreground/40 text-sm">Reserva tu espacio y déjanos cuidar de ti.</p>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase font-bold text-foreground/40 ml-2 tracking-widest">Nombre Completo</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-white/50 border border-rose/10 rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-gold transition-colors font-sans"
                                    placeholder="Ej. Ana García"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase font-bold text-foreground/40 ml-2 tracking-widest">WhatsApp</label>
                                    <input
                                        type="tel"
                                        className="w-full bg-white/50 border border-rose/10 rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-gold transition-colors font-sans"
                                        placeholder="+593 99 626 4362"
                                        value={formData.whatsapp}
                                        onChange={handleWhatsappChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase font-bold text-foreground/40 ml-2 tracking-widest">Servicio de Interés</label>
                                    <select
                                        className="w-full bg-white/50 border border-rose/10 rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-gold transition-colors font-sans appearance-none cursor-pointer"
                                        value={formData.projectType}
                                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                                    >
                                        <option value="Facial">Tratamiento Facial</option>
                                        <option value="Capilar">Cuidado Capilar</option>
                                        <option value="Wellness">Masaje & Bienestar</option>
                                        <option value="Otro">Otro Servicio</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2 flex-grow">
                                <label className="text-xs uppercase font-bold text-foreground/40 ml-2 tracking-widest">Comentarios Adicionales</label>
                                <textarea
                                    required
                                    rows={4}
                                    className="w-full bg-white/50 border border-rose/10 rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-gold transition-colors font-sans resize-none"
                                    placeholder="Cuéntanos qué necesitas para tu sesión de belleza..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className={`group relative w-full font-sans font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 overflow-hidden ${status === 'success' ? 'bg-green-500 text-white' :
                                    status === 'error' ? 'bg-red-500 text-white' :
                                        'bg-gold hover:bg-amber-400 text-white'
                                    }`}
                            >
                                <div className={`absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 ${status === 'idle' ? 'group-hover:translate-y-0' : ''}`} />
                                <Send size={20} className={`relative z-10 ${status === 'loading' ? 'animate-pulse' : ''}`} />
                                <span className="relative z-10">
                                    {status === 'loading' ? 'Enviando...' :
                                        status === 'success' ? '¡Cita Solicitada!' :
                                            status === 'error' ? 'Error. Intenta de nuevo.' :
                                                'Solicitar Mi Cita'}
                                </span>
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Final Footer / Confidence Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 pt-12 border-t border-rose/10 text-center flex flex-col items-center gap-6"
                >
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-rose/10 flex items-center justify-center text-rose">
                            <Heart size={24} fill="currentColor" />
                        </div>
                        <p className="max-w-xl text-foreground/50 text-sm font-sans leading-relaxed">
                            Pasión por resaltar tu <span className="text-foreground font-bold italic">belleza lojana</span>. En Lumina, cada detalle está pensado para tu armonía y bienestar integral.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactLocation;
