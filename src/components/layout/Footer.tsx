"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, MapPin, Phone, Mail, Globe } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-background border-t border-rose/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Brand Info */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex items-center gap-3 mb-6 group">
                            <div className="relative w-10 h-10">
                                <Image
                                    src="/images/Logo.webp"
                                    alt="Lumina - Gabinete de Belleza y Bienestar Loja"
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                            <span className="text-foreground font-serif font-bold text-xl tracking-tight uppercase group-hover:text-rose transition-colors">LUMINA</span>
                        </div>
                        <p className="text-foreground/50 font-sans text-sm leading-relaxed mb-6 max-w-sm">
                            Realzamos tu luz propia con servicios premium de estilismo y bienestar. La elegancia y paz en Loja ahora tienen nombre propio.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://instagram.com/lumina_loja" target="_blank" className="w-10 h-10 rounded-full bg-rose/10 flex items-center justify-center text-foreground/70 hover:bg-gold hover:text-white transition-all">
                                <Instagram size={20} />
                            </Link>
                            <Link href="https://facebook.com/luminaloja" target="_blank" className="w-10 h-10 rounded-full bg-rose/10 flex items-center justify-center text-foreground/70 hover:bg-gold hover:text-white transition-all">
                                <Facebook size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Row: Quick Links & Contact */}
                    <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 md:contents">
                        {/* Column 2: Quick Links */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h4 className="text-foreground font-serif font-bold text-lg mb-6">Enlaces Rápidos</h4>
                            <ul className="space-y-4">
                                {[
                                    { name: 'Inicio', href: '#' },
                                    { name: 'Nosotros', href: '#nosotros' },
                                    { name: 'Servicios', href: '#servicios' },
                                    { name: 'Ubicación', href: '#ubicacion' },
                                ].map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-foreground/50 hover:text-rose transition-colors text-sm font-sans">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Contact */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h4 className="text-foreground font-serif font-bold text-lg mb-6">Contacto</h4>
                            <ul className="space-y-4">
                                <li className="flex flex-col items-center md:items-start md:flex-row gap-3">
                                    <MapPin size={18} className="text-rose shrink-0 md:mt-1" />
                                    <span className="text-foreground/50 text-sm font-sans">
                                        Celica y 18<br className="md:hidden" /> de Nov.
                                    </span>
                                </li>
                                <li className="flex flex-col items-center md:items-start md:flex-row gap-3">
                                    <Phone size={18} className="text-rose shrink-0" />
                                    <span className="text-foreground/50 text-sm font-sans">+593 99 626 4362</span>
                                </li>
                                <li className="flex flex-col items-center md:items-start md:flex-row gap-3">
                                    <Mail size={18} className="text-rose shrink-0" />
                                    <span className="text-foreground/50 text-sm font-sans break-all">contacto@<br className="md:hidden" />luminaloja.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 4: Map */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-foreground font-serif font-bold text-lg mb-6">Visítanos</h4>
                        <div className="aspect-video w-full max-w-sm md:max-w-none rounded-xl overflow-hidden border border-rose/10 relative group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.069966257073!2d-79.2034951!3d-4.0060391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb373c9b254913%3A0x92662d1cf07bd8ef!2sNALUZ!5e0!3m2!1ses-419!2sec!4v1770906379063!5m2!1ses-419!2sec"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(0.5) opacity(0.8)' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="group-hover:opacity-100 transition-opacity"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-rose/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
                    <p className="text-foreground/30 text-xs font-sans">
                        &copy; 2026 Lumina Beauty & Wellness | Loja, Ecuador
                    </p>
                    <div className="flex gap-6">
                        <Link href="/terminos" className="text-foreground/30 hover:text-foreground/60 text-[10px] uppercase tracking-widest font-sans">Términos</Link>
                        <Link href="/privacidad" className="text-foreground/30 hover:text-foreground/60 text-[10px] uppercase tracking-widest font-sans">Privacidad</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
